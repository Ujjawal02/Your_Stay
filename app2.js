//Handling async error in try and catch block
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const port = 3000;
const MONGO_URL = "mongodb://127.0.0.1:27017/airbnb";
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
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
app.get("/listings", async (req, res) =>{
    try {
        const allListings = await Listing.find({});
        res.render("listings/index.ejs", {allListings});
    } catch (error) {
        console.log("Index Route Error :: ", error);
        next(err);
    }
    
});

//New form Route
app.get("/listings/new", async (req, res, next) =>{
    try {
         res.render("listings/new.ejs");
    } catch (error) {
        console.log("New Route Error :: ", error);
        next(err);
    }
});

//Show Route
app.get("/listings/:id", async (req, res, next) =>{
    try {
        let {id} = req.params;
        const listing = await Listing.findById(id);
        res.render("listings/show.ejs", {listing});
    } catch (error) {
        console.log("Show Route Error :: ", error);
        next(err);
    }
    
});
//Create Route
app.post("/listings", async (req, res, next) =>{
    try {
        // let {title, description, image, price, country, location} = req.body;
    let listing = req.body.listing;
    const newListing = new Listing(listing);
    await newListing.save();
    res.redirect("/listings");
    console.log("My new Listing", listing);
    } catch (error) {
        console.log("Create Route Error :: ", error);
        next(err);
    }
    
});
//Edit form Route
app.get("/listings/:id/edit", async (req, res, next) =>{
    try {
        let {id} = req.params;
        let listing = await Listing.findById(id);
        res.render("listings/edit.ejs", {listing});
    } catch (error) {
        console.log("Edit Route Error :: ", error);
        next(err);
    }
    
}); 

//Update Route
app.put("/listings/:id", async (req, res, next) =>{
    try {
        let {id} = req.params;
        await Listing.findByIdAndUpdate(id, {...req.body.listing});
        res.redirect(`/listings/${id}`);
    } catch (error) {
        console.log("Update Route Error :: ", error);
        next(err);
    }
    
});

//Delete Route
app.delete("/listings/:id", async (req, res, next) =>{
    try {
        let {id} = req.params;
        let deletedListing = await Listing.findByIdAndDelete(id);
        console.log("Deleted Listing ::", deletedListing);
        res.redirect(`/listings`);
    } catch (error) {
        console.log("Delete Route Error :: ", error);
        next(err);
    }
});

//Default error handler
app.use((err,req,res,next) =>{
    console.log("Something went wrong!");
    res.send("Something went wrong");
});


app.listen(port, () =>{
    console.log(`Server is listening to port :: ${port}`)
});
