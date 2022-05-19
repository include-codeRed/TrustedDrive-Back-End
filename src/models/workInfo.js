const mongoose = require('mongoose');
const validator = require('validator');

const workInfo = new mongoose.Schema({
    clientId: {
        type: String,
        required: true,
    },
    servicingId: {
        type: Number,
        required: true
    },
    employeeId: {
        type: String
    },
    servicingStatus: {
        type: String,
        required: true,
        default: "service accepted"
    },
    ClientName: {
        type: String,
        required: true,
        minlength: 3,
    },
    clientPhone: {
        type: Number,
        required: true,
        min: 10
    },
    clientEmail: {
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


const work = new mongoose.model('workInfo',workInfo);

module.exports = work;