// Authentication using passport 
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const port = 3000;
const MONGO_URL = "mongodb://127.0.0.1:27017/airbnb";
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const flash = require("connect-flash");

const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");

//express.Routes
const listingsRouter = require("./routes/listing.js");
const reviewsRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");
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

const sessionOptions = {
    secret: "musupersecretcode",
    resave: false,
    saveUninitialized: true,
    cookie:{
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    }
};

app.get("/",(req, res) =>{
    res.send(".......Root Call......")
});

app.use(session(sessionOptions));
app.use(flash());
//passport ko implement krne ke liye session ki jrurt hoti hai
//1St passport initialize for every request as middlewre 
app.use(passport.initialize());
//Ek website ko pta honi chahiye ki kya ek user ek page se dusre page pr ja rha hai to kya vo ek hi user same req bhej rha website ko ya different -2 user
//We want in one session user ek hi bar signup ya login kre use bar bar na krna pde 
//passport.session() use hota hai, jisse har ek req ko pta ho vo kaunse sessin ka part hai..
app.use(passport.session());
//Finaly we write
//for-> yaha ham ye kah rhe hai ki jitne bhi user aaye vo LocalStrategy ke through authenticate hone chahiye 
//Aur un users ko authenticate krne ke liye authenticate method use hoga
//joki ek static method haijise passport locals mongoose ne add kriya hau

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());//user se related jitne bhi information hai use session ke andr store krana 
passport.deserializeUser(User.deserializeUser());//unstore -> remove after session completion


app.use((req, res, next)=>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
});

app.get("/demoUser", async(req, res) =>{
    let fakeUser = new User({
        email: "abcd123@gmail.com",
        username: "abcd123",
    });
    let newUser = await User.register(fakeUser, "password");
    res.send(newUser);
});

app.use("/listings", listingsRouter);
app.use("/listings/:id/reviews", reviewsRouter);
app.use("/", userRouter);

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