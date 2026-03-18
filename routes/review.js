const express = require("express");
const router = express.Router({mergeParams: true});
const Listing = require("../models/listing.js"); 
const Review = require("../models/review.js");
const wrapAsync = require("../utils/wrapAsync.js");
// const ExpressError = require("../utils/ExpressError.js");
// const {reviewSchema} = require("../schema.js");
const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js");
const reviewController = require("../controllers/review.js");
//Validate Review -> use as middleware..
// const validateReview = (req, res, next)=>{
//     let result = reviewSchema.validate(req.body);
//     console.log(result);
//     if(result.error){
//         let errMsg = result.error.details.map((element) => element.message).join(",");
//         throw new ExpressError(400, errMsg);
//     }else{
//         next();
//     }
// }

//Reviews... Post Route
router.post("/", 
    isLoggedIn,
    validateReview, 
    wrapAsync(reviewController.postReview)
);


//Delete Review
router.delete("/:reviewId",
    isLoggedIn,
    isReviewAuthor,
    wrapAsync(reviewController.distroyReview)
);

module.exports = router;