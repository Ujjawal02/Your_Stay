const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js")
const cookieParser = require("cookie-parser")

//signed cookies
app.use(cookieParser("secretcode"));

app.get("/getsignedcookies", (req, res) =>{
    res.cookie("madeIn", "India", {signed: true})
    res.send("Signed cookies send");
});

app.get("/verify", (req, res) =>{
    console.log("Only print unsignedcookies", req.cookies);
    console.log(req.signedCookies);
    res.send("Verify");
});

app.get("/getcookies", (req, res) =>{
    res.cookie("greet", "namste");
    res.cookie("madeIn", "india");
    res.send("Cookies")
});

app.get("/greet", (req, res) =>{
    let {name="Ananomous"} = req.cookies;
    res.send(`hi ${name}`)
});

app.get("/", (req, res) =>{
    console.dir(req.cookies);
    console.log(req.cookies);
    res.send("Root");
});


//Ab hmari express app ko pta hai jitni bhi routes pr request aayegi jo "/users" se start hote hai
//unki matching hme users file ke andr krni hai
//users 
app.use("/users", users);
//posts - Route
//Index Route
app.use("/posts", posts);


app.listen(3000, (req, res) =>{
    console.log("Server is listing in port 3000");
});