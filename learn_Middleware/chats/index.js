const mongoose = require("mongoose");
const initData = require("./data.js");
const MONGO_URL = "mongodb://127.0.0.1:27017/chatNew";
const Chat = require("../models/chat.js");


async function main(){
    await mongoose.connect(MONGO_URL);
}



