//Restructuring listing and review routes using 
//express.Router
//To reduce bulkuness in code...


const express = require('express');
const app = express();
const mongoose = require("mongoose");
const port = 3000;
const MONGO_URL = "mongodb://127.0.0.1:27017/airbnb";
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
//wrapAsync function-> for async error handling
//ExpressError class to show custom error for each
const ExpressError = require("./utils/ExpressError.js");
//require Joi Schema

//express.Routes
const listings = require("./routes/listing.js");
const reviews = require("./routes/review.js");
//call main function
main()
.then(()=>{
    console.log("<<<<<DataBase Connected>>>>>");
})
.catch((err) =>{
    console.log(err);
});

//connect to database
async function main() {
    await mongoose.connect(MONGO_URL);
}


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));


app.get("/",(req, res) =>{
    res.send(".......Root Call......")
});

app.use("/listings", listings);
app.use("/listings/:id/reviews", reviews);
//Yaha /listings/:id/reviews ye jo parent route hai ye yahi app.js me hi rha jayega 
//agr ham chahte hai ki ye apne child ke sath merge krna chahte hai to jaha pr ham review.js ke 
//andr router object create kr rhe hai 
// const router = express.Router({mergeParams: true});

app.use((req, res, next) =>{
    next(new ExpressError(404, "Page Not Found!"));
});

app.use((err, req, res, next) =>{
    let {statusCode=500, message="Something went wrong"} = err;
    // res.status(statusCode).send(message);
    res.status(statusCode).render("error.ejs", {err});
});

app.listen(port, () =>{
    console.log(`Server is listening to port :: ${port}`)
});