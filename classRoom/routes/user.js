// const express = require("express");
// const router = express.Router()

// //USer - Route
// //Index Route
// router.get("/users", (req, res) =>{
//     res.send("User Index");
// }); 
// // show route
// router.get("/users/:id", (req, res) =>{
//     res.send("Show Route User")
// });

// router.post("/users", (req, res) =>{
//     res.send("Post Route of user");
// });
// router.delete("/users/:id", (req, res) =>{
//     res.send("Delete route of user")
// });

// module.exports = router;

const express = require("express");
const router = express.Router()

//USer - Route
//Index Route
router.get("/", (req, res) =>{
    res.send("User Index");
}); 
// show route
router.get("/:id", (req, res) =>{
    res.send("Show Route User")
});

router.post("/", (req, res) =>{
    res.send("Post Route of user");
});
router.delete("/:id", (req, res) =>{
    res.send("Delete route of user")
});

module.exports = router;