const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chats = new Schema({
    sender:{
        type:String,
    },
    reciever:{
        type:String,
    },
    message:{
        type:String,
    }

});

const Chat = mongoose.model("Chat", chats);
module.exports = Chat;

