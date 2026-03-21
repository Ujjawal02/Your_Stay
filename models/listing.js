const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review");
const User = require("./user");

//Creating Schema
const listingSchema = new Schema({
    title:{
        type:String,
        require:true,
    },
    description:{
        type:String,
    },
    // image:{
    //     type:String,
    //     default: "https://images.unsplash.com/photo-1658591049748-4937f0a9051a?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //     set: (v) => v==="" ? "https://images.unsplash.com/photo-1658591049748-4937f0a9051a?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" : v,
    // },
    image : {
        filename: { 
        type: String, 
        default: "listingimage" 
        }, 
        url: {
            type: String, 
            default: "https://plus.unsplash.com/premium_photo-1770579620207-7424f72593c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
            set: (v) => v === "" ? "https://plus.unsplash.com/premium_photo-1770579620207-7424f72593c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8" : v,
        },
    },
    
    price:{
        type:Number,
    },
    location:{
        type:String,
    },
    country:{
        type:String,
    },
    reviews:[
        {
        type: Schema.Types.ObjectId,
        ref:"Review"
        }
    ],
    owner:{
        type: Schema.Types.ObjectId,
        ref: "User",
     },  
});

listingSchema.post("findOneAndDelete", async(listing) =>{
    if(listing){
        await Review.deleteMany({_id: {$in: listing.reviews}});
    }
});

//Creating model using listingSchema
const Listing = mongoose.model("Listing", listingSchema)
module.exports = Listing;
