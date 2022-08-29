const express = require('express');
const jwt = require('jsonwebtoken');

const servicing = require('../models/servicingInfo');
const userEmployee = require('../models/userInfoEmployee');

const router = express.Router();

router.route('/schedule')
.post(async  (req, res) => {
    try {
        const token = req.cookies.auth;
        const verifyUser = jwt.verify(token,process.env.SECRET_KEY);

        const data = {
            clientId: verifyUser._id,
            servicingId: Number(new Date()),
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
            vehicleModel: req.body.vehicleModel,
            vehicleYear: req.body.vehicleYear,
            vehicleRegistrationNo: req.body.vehicleRegistrationNo,
            vehicleSerialNo: req.body.vehicleSerialNo,
            vehicleInsurance: req.body.vehicleInsurance,
            vehicleCategory: req.body.vehicleCategory,
            vehicleDescription: req.body.vehicleDescription,
            scheduleAddress: req.body.scheduleAddress,
            scheduleDate: req.body.scheduleDate,
            scheduleTime: req.body.scheduleTime,
            scheduleLocation: {
                lat: req.body.lat,
                lng: req.body.lng
            }
        }
        console.log(req.body);
        console.log(data);

        const newServicing = new servicing(data);
        const result = await newServicing.save();

        console.log(result);

        res.status(201).redirect('/our-service');
    } catch (err) {
        console.log(err);
        res.status(400).render('scheduleForm', {
            message: "something Went Wrong"
        });
    } 
});


// router.route('/schedule/:id')
// .get(async (req, res) => {
//     try {
        
//     } catch (error) {
//         res.status(400).send({message: "result not found"});
//     }
// })

router.route('/schedule/:id')
.patch(async (req, res) => {
    try {
        const token = req.cookies.auth;
        const verifyUser = jwt.verify(token,process.env.SECRET_KEY);
        const result = await userEmployee.findOne({_id:verifyUser._id});

        res.status(201).send(result);

        let servicingId = req.params.id;
        const results = await servicing.updateOne({servicingId},req.body);

        console.log(results);
        // res.send(results);

    } catch (error) {
        console.log(error);
        res.status(400).send("something went wrong!..");
    }
});

module.exports = router;