//Error handling using wrapAsync function
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
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

app.get("/",(req, res) =>{
    res.send(".......Root Call......")
});

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
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", {listing});
}));
//Create Route
app.post("/listings", wrapAsync(async (req, res) =>{
    // let {title, description, image, price, country, location} = req.body;
    let listing = req.body.listing;
    const newListing = new Listing(listing);
    await newListing.save();
    res.redirect("/listings");
    console.log("My new Listing", listing);
}));
//Edit form Route
app.get("/listings/:id/edit", wrapAsync(async (req, res) =>{
    let {id} = req.params;
    let listing = await Listing.findById(id);
    res.render("listings/edit.ejs", {listing});
})); 

//Update Route
app.put("/listings/:id", wrapAsync(async (req, res) =>{
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

app.use((err, req, res, next) =>{
    res.send("Something went wrong..!");
})


app.listen(port, () =>{
    console.log(`Server is listening to port :: ${port}`)
});