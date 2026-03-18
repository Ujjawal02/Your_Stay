const User = require("../models/user.js");

module.exports.renderSignupPage = (req, res)=>{
    res.render("users/signup.ejs");
}


module.exports.userSignup = async(req, res)=>{
    try{
        let {username, email, password} = req.body;
        const newUser = new User({username, email});
        const registeredUser = await User.register(newUser, password);
        console.log(registeredUser);
        req.login(registeredUser, (err)=>{
            if(err){
                return next(err);
            }
            req.flash("success", "user was registered successfully");
            res.redirect("/listings");
        });
    }catch(e){
        req.flash("error", e.message);
        res.redirect("/signup");
    }
}

module.exports.renderLoginPage = (req, res) =>{
    res.render("users/login.ejs");
}

module.exports.userLogin = async(req, res)=>{
        req.flash("success","Welcome back on Airbnb, you are loggedIn");
        // if(res.locals.redirectUrl){
        //     return res.redirect(res.locals.redirectUrl);
        // }
        // res.redirect("/listings");   
        let redirectUrl = res.locals.redirectUrl || "/listings";
        if (redirectUrl.includes("/reviews")) {
            redirectUrl = redirectUrl.split("/reviews")[0];
        }
        res.redirect(redirectUrl);
}

module.exports.userLogout = (req, res, next) =>{
    req.logout((err) =>{
        if(err){
            next(err);
        }
        req.flash("success", "you are logged oyt now");
        res.redirect("/listings");
    });
}

