const express = require('express');

const servicing = require('../models/servicingInfo');

const router = express.Router();

router.route('/schedule')
.post(async  (req, res) => {
    try {
        const newServicing = new servicing(req.body);
        const result = await newServicing.save();

        res.status(201).send("New Data saved");
    } catch (err) {
        console.log(err);
        res.status(400).send('Error: while saving data!....');
    } 
});

module.exports = router;