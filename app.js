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
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", {allListings});
});

//New form Route
app.get("/listings/new", async (req, res) =>{
    res.render("listings/new.ejs");
});

//Show Route
app.get("/listings/:id", async (req, res) =>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", {listing});
});
//Create Route
app.post("/listings", async (req, res) =>{
    // let {title, description, image, price, country, location} = req.body;
    let listing = req.body.listing;
    const newListing = new Listing(listing);
    await newListing.save();
    res.redirect("/listings");
    console.log("My new Listing", listing);
});
//Edit form Route
app.get("/listings/:id/edit", async (req, res) =>{
    let {id} = req.params;
    let listing = await Listing.findById(id);
    res.render("listings/edit.ejs", {listing});
}); 

//Update Route
app.put("/listings/:id", async (req, res) =>{
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id, {...req.body.listing});
    res.redirect(`/listings/${id}`);
});

//Delete Route
app.delete("/listings/:id", async (req, res) =>{
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log("Deleted Listing ::", deletedListing);
    res.redirect(`/listings`);
});


app.listen(port, () =>{
    console.log(`Server is listening to port :: ${port}`)
});


// app.get("/testListing", async(req, res) =>{
//     let sampleListing = new Listing({
//         title:"My Home",
//         description: "Such a Beautifull Place",
//         price:1233,
//         location:"Sultanpur Up",
//         country:"India"
//     })
//     await sampleListing.save();
//     console.log('Sample listing is save to database');
//     res.send("Successfully Save Listing");
// });