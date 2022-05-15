const mongoose = require('mongoose');
const validator = require('validator');

const serviceInfo = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
    },
    phone: {
        type: Number,
        required: true,
        min: 10
    },
    email: {
        type: String,
        required: true,
        validate(email) {
            if(!validator.isEmail(email)) {
                throw new Error("Invalid Email");
            }
        }
    },
    vehicleModel: {
        type: String,
        required: true
    },
    vehicleYear: {
        type: Number,
        required: true
    },
    vehicleRegistrationNo: {
        type: String,
        required: true
    },
    vehicleSerialNo: {
        type: String,
        required: true
    },
    vehicleInsurance: {
        type: String,
        required: true
    },
    vehicleCategory: {
        type: String,
        required: true
    },
    vehicleDescription: {
        type: String,
        required: true
    },
    scheduleAddress: {
        type: String,
        required: true
    },
    scheduleDate: {
        type: Date,
        required: true
    },
    scheduleTime: {
        type: String,
        required: true
    },
    scheduleLocation: {
        lat: {
            type: Number,
            required: true
        },
        lng: {
            type: Number,
            required: true
        },
    }
});


const servicing = new mongoose.model('servicingInfo',serviceInfo);

module.exports = servicing;