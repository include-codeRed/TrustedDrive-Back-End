const express = require('express');

const router = express.Router();

const auth = require('../middleware/auth');

const scheduleServicing = require('../models/servicingInfo');


router.get('/', auth('home') ,async (req,res) => {
    res.render('index', {
        client: () => {
            if(req.type == 'employee')
            return true
            else 
            return false
        },
        employee: () => {
            if(req.type == 'client')
            return true
            else 
            return false
        },
        none: () => {
            if(req.type != 'employee' && req.type != 'client')
            return true
            else 
            return false
        },
        login: {
            name: req.user.name.toUpperCase()
        }
    });
});

router.get('/home', auth('home') ,async (req,res) => {
    res.render('index', {
        client: () => {
            if(req.type == 'employee')
            return true
            else 
            return false
        },
        employee: () => {
            if(req.type == 'client')
            return true
            else 
            return false
        },
        none: () => {
            if(req.type != 'employee' && req.type != 'client')
            return true
            else 
            return false
        },
        login: {
            name: req.user.name.toUpperCase()
        }
    });
});

router.get('/about', auth('about') ,async (req,res) => {
    res.render('about', {
        client: () => {
            if(req.type == 'employee')
            return true
            else 
            return false
        },
        employee: () => {
            if(req.type == 'client')
            return true
            else 
            return false
        },
        none: () => {
            if(req.type != 'employee' && req.type != 'client')
            return true
            else 
            return false
        },
        login: {
            name: req.user.name.toUpperCase()
        }
    });
});

router.get('/join-us', auth('join-us') ,async (req,res) => {
    res.render('registration', {
        none: true
    });
});

router.get('/sign-up-client', auth('sign-up-client') ,async (req,res) => {
    res.render('signup_client', {
        none: true
    });
});

router.get('/sign-up-employee', auth('sign-up-client') ,async (req,res) => {
    res.render('signup_employee', {
        none: true
    });
});

router.get('/sign-in', auth('sign-in') , async (req,res) => {
    res.render('login', {
        none: true
    });
});

router.get('/sign-in-client', auth('sign-in') , async (req,res) => {
    res.render('loginClient', {
        none: true
    });
});

router.get('/sign-in-employee', auth('sign-in') , async (req,res) => {
    res.render('loginEmployee', {
        none: true
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

router.get('/schedule-your-service', auth('client')  , async (req, res) => {
    res.render('scheduleForm', {
        key: process.env.GOOGLE_MAP_KEY,
        fun: 'initMap',
        client: true,
        login: {
            name: req.user.name.toUpperCase()
        },
        name: req.user.name,
        email: req.user.email,
        phone: req.user.phone
    });
});

router.get('/schedule-your-service-for-emergency', auth('client')  ,async (req, res) => {
    res.render('emergencyForm', {
        key: process.env.GOOGLE_MAP_KEY,
        client: true,
        login: {
            name: req.user.name.toUpperCase()
        }
    });
});

router.get('/profile', auth('')  ,async (req, res) => {
    console.log(req.user);

    res.render('profile', {
        client: () => {
            if(req.type == 'employee')
            return true
            else 
            return false
        },
        employee: () => {
            if(req.type == 'client')
            return true
            else 
            return false
        },
        none: () => {
            if(req.type != 'employee' && req.type != 'client')
            return true
            else 
            return false
        },
        login: {
            name: req.user.name.toUpperCase()
        },
        name: req.user.name.toUpperCase(),
        email: req.user.email,
        phone: req.user.phone,
        gender: req.user.gender,
        city: req.user.city,
        country: req.user.country,
        DOB: Date(req.user.dateOfBirth)
    });
});

router.get('/dashboard', auth('employee')  ,async (req, res) => {
    const result = await scheduleServicing.find();

    const results = result.filter((elem) => {
        return (elem.servicingStatus != "service Accepted");
    })
    res.render('dashboard', {
        employee: true,
        key: process.env.GOOGLE_MAP_KEY,
        fun: 'addMapDashBoard',
        login: {
            name: req.user.name.toUpperCase()
        },
        results,
        employeeId: req.user._id
    });
});

router.get('/our-client', auth('employee')  ,async (req, res) => {
    const results = await scheduleServicing.find({employeeId: req.user._id});

    res.render('ourClient', {
        employee: true,
        key: process.env.GOOGLE_MAP_KEY,
        fun: 'addMapOurClient',
        login: {
            name: req.user.name.toUpperCase()
            
        },
        results
    });
});

router.get('/our-service', auth('client')  ,async (req, res) => {
    const results = await scheduleServicing.find({clientId: req.user._id});

    res.render('ourService', {
        client: true,
        key: process.env.GOOGLE_MAP_KEY,
        fun: 'addMap',
        login: {
            name: req.user.name.toUpperCase()
        },
        results,
    });
});

router.get('/repair-your-vehicle', auth('client')  , async (req, res) => {
    res.render('repairYourVehicle', {
        client: true,
        login: {
            name: req.user.name.toUpperCase()
        }
    });
});




module.exports = router;