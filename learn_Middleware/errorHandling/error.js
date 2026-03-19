const express = require("express");
const app = express();
const port = 8080;
const ExpressError = require("./ExpressError.js");


//Default express handler...
// const checkToken = (req, res, next) =>{
//     let {token} = req.query;
//     if(token == "giveaccess"){
//         next();
//     }
//     throw new Error("Access Denied");
// }

const checkToken = (req, res, next) =>{
    let {token} = req.query;
    if(token == "giveaccess"){
        next();
    }
    throw new ExpressError(401,"Access Denied");
}

app.get("/api", checkToken, (req, res) =>{
    res.send("Data Api...");
})


app.use((req, res, next)=>{
    console.log("First Middleware");
    next();
});

app.use("/stop", (req, res, next) =>{
    res.send("Stop middleware")
});

app.use("/random", (req, res, next) =>{
    console.log("Middleware only for random");
    next();
});


app.use("/random", (req, res) =>{
    res.send("random Route");
});

app.get("/", (req, res) =>{
    res.send("Root Call");
});

app.use((err, req, res, next) =>{
    // console.log(">>>>>..Error..<<<<<<<");
    let {status=500, message="Some Error Occured"} = err;
    // res.send(err);
    res.status(status).send(message);
});



app.listen(port, ()=>{
    console.log("App is listening on port ::", port);
});