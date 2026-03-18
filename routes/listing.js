const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");
const listingController = require("../controllers/listing.js");




//Index Route, Create Route same path pr request bhej rhe then merge in compact form
router
    .route("/")
    .get(wrapAsync(listingController.index))
    .post( 
    isLoggedIn,
    validateListing,
    wrapAsync(listingController.createListing)
);

//New form Route
router.get("/new",
    isLoggedIn,
    wrapAsync(listingController.renderNewFrom)
);


router
    .route("/:id")
    .get(wrapAsync(listingController.showListing))
    .put(
    isLoggedIn,
    isOwner,
    validateListing,
    wrapAsync(listingController.updateListing))
    .delete( 
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.distroyListing)
);


//Edit form Route
router.get("/:id/edit", 
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.renderEditFrom)
); 

module.exports = router;



//Index Route
// router.get("/", wrapAsync(listingController.index));

//New form Route
// router.get("/new",
//     isLoggedIn,
//     wrapAsync(listingController.renderNewFrom)
// );



//Show Route
// router.get("/:id", wrapAsync(listingController.showListing));


//Create Route
// router.post("/", 
//     isLoggedIn,
//     validateListing,
//     wrapAsync(listingController.createListing)
// );


// //Edit form Route
// router.get("/:id/edit", 
//     isLoggedIn,
//     isOwner,
//     wrapAsync(listingController.renderEditFrom)
// ); 

//Update Route
// router.put("/:id",
//     isLoggedIn,
//     isOwner,
//     validateListing,
//     wrapAsync(listingController.updateListing)
// );

//Delete Route
// router.delete("/:id", 
//     isLoggedIn,
//     isOwner,
//     wrapAsync(listingController.distroyListing)
// );

// module.exports = router;