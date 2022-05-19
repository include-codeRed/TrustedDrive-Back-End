const express = require('express');
const bcryptjs = require('bcryptjs');



const user = require('../models/userInfoClient');
const router = express.Router();

router.route('/sign-up-client')
    .post(async (req, res) => {
        try {
            const newUser = new user(req.body);
            const token = await newUser.generateAuthToken();
            const result = await newUser.save();

            res.cookie('auth', token, {
                expires: new Date(Date.now + 500000),
                httpOnly: true
            });

            const authCookies = req.cookies.auth;

            console.log(authCookies);

            res.status(201).redirect("/profile");
        } catch (err) {
            res.status(400).render('signup_client', {
                message: "Something Went Wrong!.."
            });
            console.log(err);
        }
    });

router.route('/sign-in').post(async (req, res) => {
    try {
        const email = req.body.email;
        const pass = req.body.password;

        const result = await user.findOne({email});
        const isPassMatch = await bcryptjs.compare(pass, result.originalPassword);


        if (isPassMatch) {
            const token = await result.generateAuthToken()
            res.cookie('auth', token, {
                expires: new Date(Date.now() + 50000000),
                httpOnly: true
            });
            res.status(200).redirect("/profile");
        }
        else {
            res.status(400).render("loginClient", {
                message: "Email or Password Not Match"
            });
        }
    } catch (err) {
        res.status(400).send("Error: while sing-in");
        console.log(err);
    }
})


router.route('/user').get(async (req, res) => {
    try {
        const result = await user.find();
        res.status(200).send(result);
    } catch (err) {
        res.status(400).send(`${err} : can't fetch the data`)
    }
});

router.route('/email/:email')
    .get(async (req, res) => {
        const email = req.params.email;
        console.log(email);
        try {
            const result = await user.findOne({ email });
            res.status(200).send({ email: result.email });
        } catch (error) {
            res.status(400).send({ email: "not found" });
        }
    });

router.route('/phone/:phone')
    .get(async (req, res) => {
        const phone = req.params.phone;
        try {
            const result = await user.findOne({ phone });
            res.status(200).send({ phone: result.phone });
        } catch (error) {
            res.status(400).send({ phone: "not found" });
        }
    });



module.exports = router;