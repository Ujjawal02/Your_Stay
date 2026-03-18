const Listing = require("./models/listing.js");
const Review = require("./models/review.js");
const ExpressError = require("./utils/ExpressError.js");
const {listingSchema, reviewSchema} = require("./schema.js");

module.exports.isLoggedIn = (req, res, next)=>{
    console.log(req.path, "..", req.originalUrl);
    if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "you must be loggedIn!");
        return res.redirect("/login");
    }
    next();
}

module.exports.saveRedirectUrl = (req, res, next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
        delete req.session.redirectUrl;
    }
    next();
}

module.exports.isOwner = async(req, res, next)=>{
    let {id} = req.params;
    let listing = await Listing.findById(id);
    if(!listing.owner._id.equals(res.locals.currUser._id)){
        req.flash("error", "you don't have permission!");
        return res.redirect(`/listings/${id}`);
    }
    next();
}

module.exports.validateListing = (req, res, next)=>{
    let result = listingSchema.validate(req.body);
    console.log(result);
    if(result.error){
        let errMsg = result.error.details.map((element) => element.message).join(",");
        throw new ExpressError(400, errMsg);
    }else{
        next();
    }
}

module.exports.validateReview = (req, res, next)=>{
    let result = reviewSchema.validate(req.body);
    console.log(result);
    if(result.error){
        let errMsg = result.error.details.map((element) => element.message).join(",");
        throw new ExpressError(400, errMsg);
    }else{
        next();
    }
}


module.exports.isReviewAuthor = async(req, res, next)=>{
    let {reviewId, id} = req.params;
    let review = await Review.findById(reviewId);
    if(!review){
        req.flash("error", "Review not found!");
        return res.redirect(`/listings/${id}`);
    }
    if(!review.author.equals(res.locals.currUser._id)){
        req.flash("error", "you are not the author of this review");
        return res.redirect(`/listings/${id}`);
    }
    next();
}