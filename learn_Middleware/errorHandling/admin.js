const express = require("express");
const app = express();
const port = 8080;
const ExpressError = require("./ExpressError.js");

app.get("/admin", (req, res) =>{
    throw new ExpressError(403, "Admin Access only");
});

app.get("/", (req, res) =>{
    res.send("Root Call");
});

app.use((err, req, res, next) =>{
    let {status, message} = err;
    res.status(status).send(message);
});


app.listen(port, ()=>{
    console.log("App is listening on port ::", port);
});