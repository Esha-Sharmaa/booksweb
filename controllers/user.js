const User = require("../models/user");
const { v4: uuidv4 } = require('uuid'); 
const { setUser, getUser } = require("../services/auth");


async function handleUserSignup(req, res) {
    const { name, email, password } = req.body;
    try {
        await User.create({
            name,
            email,
            password
        });
        res.redirect("/api/books");
    } catch (error) {
        console.log(error);
    }
}

async function handleUserLogin(req, res) {
    const {  email, password } = req.body;
    try {
        const user = await User.findOne({ email, password });
        if (!user) {
            res.render("login", {
                error: "Invalid Password or email"
            });
        }
        // const sessionId = uuidv4();
        // setUser(sessionId, user);
        // res.cookie('uid', sessionId);
        res.redirect("/");

    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    handleUserSignup,
    handleUserLogin
}