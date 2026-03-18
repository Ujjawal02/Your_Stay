const express = require("express");
const app = express();
const port = 8080;


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



app.listen(port, ()=>{
    console.log("App is listening on port ::", port);
});