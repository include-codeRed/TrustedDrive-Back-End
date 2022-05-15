const express = require('express');

const router = express.Router();

const auth = require('../middleware/auth');


router.get('/', auth('') ,async (req,res) => {
    res.render('index');
});

router.get('/sign-up', auth('sign-up') ,async (req,res) => {
    res.render('signup');
});

router.get('/sign-in', auth('sign-in') , async (req,res) => {
    res.render('login', {
        description: "Enter Your Details Below."
    });
});

router.get('/log-out', auth(''), async(req,res) => {
    req.user.tokens = req.user.tokens.filter((token) => {
        return token.token != req.token;
    });
    
    res.clearCookie('auth');


    await req.user.save();
    res.status(200).redirect('/sign-in');
});

router.get('/schedule-your-service', auth('')  , async (req, res) => {
    res.render('scheduleForm');
});

router.get('/schedule-your-service-for-emergency', auth('')  ,async (req, res) => {
    res.render('scheduleForm');
});

router.get('/profile', auth('')  ,async (req, res) => {
    res.render('profile');
});

router.get('/repair-your-vehicle', auth('')  , async (req, res) => {
    res.render('emergency');
});




module.exports = router;