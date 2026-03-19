const express = require("express");
const router = express.Router()

router.get("/", (req, res) =>{
    res.send("post Index");
}); 
// show route
router.get("/:id", (req, res) =>{
    res.send("Show Route Post")
});

router.post("/", (req, res) =>{
    res.send("Post Route of posts");
});
router.delete("/:id", (req, res) =>{
    res.send("Delete route of posst")
});
module.exports = router;