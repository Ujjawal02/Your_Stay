const mongoose = require("mongoose");
require("dotenv").config({path: "../.env"});
const initData = require("./data.js");
// const MONGO_URL = "mongodb://127.0.0.1:27017/airbnb";
const url = process.env.ATLASDB_URL;
const Listing = require("../models/listing.js");

main()
.then(()=>{
    console.log("Conneted to database")
})
.catch((err) =>{
    console.log(err);
})

async function main(){
    // await mongoose.connect(MONGO_URL);
    await mongoose.connect(url);
}

const initDB = async()=>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=>({
        ...obj, owner: '69e324aaeb1c9f9185a5fbf1',
    }));

    await Listing.insertMany(initData.data);
    console.log("Data Initialized");
}

initDB();

