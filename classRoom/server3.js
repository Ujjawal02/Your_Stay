const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
//express-session is a middleware
const session = require("express-session");
const flash = require("connect-flash");
//jaise hi sessin ko as a middleware use kr liya, vaise hi har ek request ke sath get,post etc ab ek session id 
//browser ke andr jake save ho jayegi in the form of coolies
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


const sessionOptions = {
    secret: "mysupersecretstring",
    resave: false, 
    saveUninitialized: true
}

// app.use(session({
//     secret: "mysupersecretstring",
//     resave: false, 
//     saveUninitialized: true})
// );

app.use(session(sessionOptions));
app.use(flash());
app.use((req, res, next) =>{
    res.locals.successMsg = req.flash("success");
    res.locals.errorMsg = req.flash("error");
    next();
});
//req.session ek single session ko track krta hai..
//req.session.count ek variable hai........
//session storage.. read


// app.get("/register", (req, res) =>{
//     let {name="ananomous"} = req.query;
//     // console.log(req.session);
//     req.session.name = name;
//     console.log(req.session.name);
//     // res.send(name);
//     //flash ke andr key and message
//     req.flash("success", "user registered successfully!");

//     res.redirect("/hello");
// });

// app.get("/hello", (req, res) =>{
//     // res.send(`hello, ${req.session.name}`);
//     // console.log(req.flash("success"));
//     // res.render("page.ejs", {name: req.session.name, msg: req.flash("success")});
//     //a good way to send a variable to render page
//     //Now we don't need to pass explicitly variavle in res.render
//     res.locals.messages = req.flash("success");
//     res.render("page.ejs", {name: req.session.name});
// });


app.get("/register", (req, res) =>{
    let {name="ananomous"} = req.query;
    // console.log(req.session);
    req.session.name = name;
    if(name === "ananomous"){
        req.flash("error", "user not found");
    }else{
         req.flash("success", "user registered successfully!");
    }
    res.redirect("/hello");
});

//we can shift this locals varialbe in a middleware
// app.get("/hello", (req, res) =>{
//     res.locals.successMsg = req.flash("success");
//     res.locals.errorMsg = req.flash("error");
//     res.render("page.ejs", {name: req.session.name})
// });
app.get("/hello", (req, res) =>{
    res.render("page.ejs", {name: req.session.name})
});




app.get("/reqcount", (req, res) =>{
    if(req.session.count){
        req.session.count++;
    }
    else{
        req.session.count = 1;
    }
    res.send(`You sent req ${req.session.count} times`);
});

app.get("/test", (req, res) =>{
    res.send("Test successful!");
});


app.listen(3000, ()=>{
    console.log("server is listening on port 3000");
});
