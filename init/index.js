const mongoose = require("mongoose");
const initData = require("./data.js");
const MONGO_URL = "mongodb://127.0.0.1:27017/airbnb";
const Listing = require("../models/listing.js");

main()
.then(()=>{
    console.log("Conneted to database")
})
.catch((err) =>{
    console.log(err);
})

async function main(){
    await mongoose.connect(MONGO_URL);
}

const initDB = async()=>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=>({
        ...obj, owner: '69b57f2f64a145553d4a62b9',
    }));
    await Listing.insertMany(initData.data);
    console.log("Data Initialized");
}

initDB();

