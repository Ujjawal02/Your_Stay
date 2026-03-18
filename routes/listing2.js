const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
// const ExpressError = require("../utils/ExpressError.js");
// const {listingSchema} = require("../schema.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");
//Validate listing...function
// shift as middleware 
// const validateListing = (req, res, next)=>{
//     let result = listingSchema.validate(req.body);
//     console.log(result);
//     if(result.error){
//         let errMsg = result.error.details.map((element) => element.message).join(",");
//         throw new ExpressError(400, errMsg);
//     }else{
//         next();
//     }
// }

//Index Route
router.get("/", wrapAsync(async (req, res) =>{
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", {allListings});
}));

//New form Route
router.get("/new",
    isLoggedIn,
    wrapAsync(async (req, res) =>{
    res.render("listings/new.ejs");
}));

//Show Route
router.get("/:id", wrapAsync(async (req, res) =>{
    let {id} = req.params;
    const listing = await Listing.findById(id)
    .populate({
        path:"reviews",
        populate:{
            path: "author",
        }
    })
    .populate("owner");
    if(!listing){
        req.flash("error", "Listing you reqeusted does not Available!");
        res.redirect("/listings");
    }else{
        res.render("listings/show.ejs", {listing});
    }
    // console.log(listing);
}));
//Create Route
router.post("/", 
    isLoggedIn,
    validateListing,
    wrapAsync(async (req, res, next) =>{
    // let {title, description, image, price, country, location} = req.body;
    if (!req.body.listing.image || !req.body.listing.image.url) {
        delete req.body.listing.image;
    }
    const newListing = new Listing(req.body.listing);
    // console.log(req.user);
    newListing.owner = req.user._id;
    await newListing.save();
    req.flash("success", "New Listing Created");
    res.redirect("/listings");
    // console.log("My new Listing", listing);
}));
//Edit form Route
router.get("/:id/edit", 
    isLoggedIn,
    isOwner,
    wrapAsync(async (req, res) =>{
    let {id} = req.params;
    let listing = await Listing.findById(id);
    if(!listing){
        req.flash("error", "Listing you reqeusted does not Available!");
        res.redirect("/listings");
    }else{
        res.render("listings/edit.ejs", {listing});
    }
})); 

//Update Route
router.put("/:id",
    isLoggedIn,
    isOwner,
    validateListing,
    wrapAsync(async (req, res) =>{
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id, {...req.body.listing});
    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
}));

//Delete Route
router.delete("/:id", 
    isLoggedIn,
    isOwner,
    wrapAsync(async (req, res) =>{
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log("Deleted Listing ::", deletedListing);
    req.flash("success", "Listing Deleted!");
    res.redirect(`/listings`);
}));

module.exports = router;