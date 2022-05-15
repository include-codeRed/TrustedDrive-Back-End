const express = require('express');
const bcryptjs = require('bcryptjs');



const user = require('../models/userInfo');
const router = express.Router();

router.route('/sign-up')
.post(async (req,res) => {
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

        res.status(201).render("index",{name: result.name});
    } catch(err) {
        res.status(400).send("Error: while saving data!...")
        console.log(err);
    }
});

router.route('/sign-in').post(async (req,res) => {
    try {
        const email = req.body.email;
        const pass = req.body.password;
        
        const result = await user.findOne({email});
        
        const isPassMatch = await bcryptjs.compare(pass,result.originalPassword);
        console.log(isPassMatch);
        if(isPassMatch) {
            const token = await result.generateAuthToken()
            res.cookie('auth',token, {
                expires: new Date(Date.now() + 5000000),
                httpOnly: true
            });
            const authCookies = req.cookies.auth;
            console.log(authCookies);


            res.status(200).render("index", {name: result.name});
        } else {
            res.status(400).redirect("/sign-in");
        }

        console.log(result);
    } catch (err) {
        res.status(400).send("Error: while sing-in");
        console.log(err);
    }
})


router.route('/').get(async (req, res) => {
    try{
        const result = await user.find();
        res.status(200).send(result);
    }catch(err) {
        res.status(400).send(`${er} : can't fetch the data`)
    }
});

router.route('/:id')
.get(async (req, res) => {
    const _id = req.params.id;
    try {
        const result = await user.findById(_id);
        res.status(200).send(result);
    } catch (error) {
        res.status(400).send(`${er} : can't fetch the data`)
    }
})



module.exports = router;