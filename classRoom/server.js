const express = require("express");
const app = express();


app.get("/", (req, res) =>{
    res.send("Root");
})

//USer - Route
//Index Route
app.get("/users", (req, res) =>{
    res.send("User Index");
}); 
// show route
app.get("/users/:id", (req, res) =>{
    res.send("Show Route User")
});

app.post("/users", (req, res) =>{
    res.send("Post Route of user");
});
app.delete("/users/:id", (req, res) =>{
    res.send("Delete route of user")
});


//posts - Route
//Index Route
app.get("/posts", (req, res) =>{
    res.send("post Index");
}); 
// show route
app.get("/posts/:id", (req, res) =>{
    res.send("Show Route User")
});

app.post("/posts", (req, res) =>{
    res.send("Post Route of posts");
});
app.delete("/posts/:id", (req, res) =>{
    res.send("Delete route of posst")
});


app.listen(3000, (req, res) =>{
    console.log("Server is listing in port 3000");
});

// bulckuness 
// Abhi server.js me do hi model se kiye hai 

// express.Router help us to restructuring the code 
//Code aaise hi kam krega, user ko sb same hi dikhega pr server side pr ham code alag trh se likh payenge..

//Ab ham apne routes ko separate krenge based upon the models
// pahle 4 routes user model pr dependent hai means vo sb related routes hai,
//means starting point same 
//To ek hi file me users ke liye aur post ke liye route likhane ke bjaye ham kya krenge 
//Routes folder ke andr user aur post ke liye 2 alag file create kr denge uske routes ko separatly likh denge fir,
// server.js me sirf require krenge with single routes
//jiski madd se server.js file easy to understand ban jayegi
