//Joi use for validation of Schema....
//validation for Schema as a middleware
//iske liye jitna bhi part joi se related hai use ek function ke form me convert kr denge
//Ab hame khud se cvalidate krne ki jrurt nahi hai sare if condition hat jayege joi validate kr lega..

const express = require('express');
const app = express();
const mongoose = require("mongoose");
const port = 3000;
const MONGO_URL = "mongodb://127.0.0.1:27017/airbnb";
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
//wrapAsync function-> for async error handling
const wrapAsync = require("./utils/wrapAsync.js");
//ExpressError class to show custom error for each
const ExpressError = require("./utils/ExpressError.js");
//require Joi Schema
const {listingSchema, reviewSchema} = require("./schema.js");
// const Review = require("./models/review.js");

const Review = require("./models/review.js");
//call main function
main()
.then(()=>{
    console.log("<<<<<DataBase Connected>>>>>");
})
.catch((err) =>{
    console.log(err);
});

//connect to database
async function main() {
    await mongoose.connect(MONGO_URL);
}


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

app.get("/",(req, res) =>{
    res.send(".......Root Call......")
});

//Validate listing...function
const validateListing = (req, res, next)=>{
    let result = listingSchema.validate(req.body);
    console.log(result);
    if(result.error){
        let errMsg = result.error.details.map((element) => element.message).join(",");
        throw new ExpressError(400, errMsg);
    }else{
        next();
    }
}
//Validate Review
const validateReview = (req, res, next)=>{
    let result = reviewSchema.validate(req.body);
    console.log(result);
    if(result.error){
        let errMsg = result.error.details.map((element) => element.message).join(",");
        throw new ExpressError(400, errMsg);
    }else{
        next();
    }
}


//Index Route
app.get("/listings", wrapAsync(async (req, res) =>{
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", {allListings});
}));

//New form Route
app.get("/listings/new",wrapAsync(async (req, res) =>{
    res.render("listings/new.ejs");
}));

//Show Route
app.get("/listings/:id", wrapAsync(async (req, res) =>{
    let {id} = req.params;
    const listing = await Listing.findById(id).populate("reviews");
    res.render("listings/show.ejs", {listing});
}));
//Create Route
app.post("/listings", 
    validateListing,
    wrapAsync(async (req, res, next) =>{
    // let {title, description, image, price, country, location} = req.body;
    if (!req.body.listing.image || !req.body.listing.image.url) {
        delete req.body.listing.image;
    }
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
    // console.log("My new Listing", listing);
}));
//Edit form Route
app.get("/listings/:id/edit", wrapAsync(async (req, res) =>{
    let {id} = req.params;
    let listing = await Listing.findById(id);
    res.render("listings/edit.ejs", {listing});
})); 

//Update Route
app.put("/listings/:id", 
    validateListing,
    wrapAsync(async (req, res) =>{
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id, {...req.body.listing});
    res.redirect(`/listings/${id}`);
}));

//Delete Route
app.delete("/listings/:id", wrapAsync(async (req, res) =>{
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log("Deleted Listing ::", deletedListing);
    res.redirect(`/listings`);
}));

//Reviews... Post Route
app.post("/listings/:id/reviews", validateReview, wrapAsync(async(req, res)=>{
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    // console.log("New review Saved");
    // res.send("New review Saved");
    res.redirect(`/listings/${listing._id}`);
}));


//Delete Review
app.delete("/listings/:id/reviews/:reviewId", wrapAsync(async(req, res)=>{
    let {id, reviewId} = req.params;
    await Listing.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);
    res.redirect(`/listings/${id}`);
}));

// app.use((err, req, res, next) =>{
//     res.send("Something went wrong..!");
// });
//ExpressError
app.use((req, res, next) =>{
    next(new ExpressError(404, "Page Not Found!"));
});

// app.use((err, req, res, next) =>{
//     let {statusCode=500, message="Something went wrong"} = err;
//     res.status(statusCode).send(message);
// });
app.use((err, req, res, next) =>{
    let {statusCode=500, message="Something went wrong"} = err;
    // res.status(statusCode).send(message);
    res.status(statusCode).render("error.ejs", {err});
});

app.listen(port, () =>{
    console.log(`Server is listening to port :: ${port}`)
});