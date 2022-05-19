const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const validator = require('validator');
const jwt = require('jsonwebtoken');

const userInformationClientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
    },
    phone: {
        type: Number,
        required: true,
        unique: [true, "This phone is already in used."],
        min: 10
    },
    email: {
        type: String,
        required: true,
        unique: [true, "This email is already in used."],
        validate(email) {
            if(!validator.isEmail(email)) {
                throw new Error("Invalid Email");
            }
        }
    },
    originalPassword: {
        type: String,
        required: true,
    },
    confirmPassword: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: Date,
    },
    gender: {
        type: String,
    },
    country: {
        type: String,
    },
    city: {
        type: String,
    },
    tokens:[{
        token:{
            type: String,
            required: true
        }
    }]
});

//generating the token and save to data base
userInformationClientSchema.methods.generateAuthToken = async function() {
    try {
        const token = jwt.sign({_id: this._id.toString()},process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token});
        await this.save();
        return token;
    } catch (err) {
        console.log(err);
    }
}

// hashing the passwords and save the hash passwords
userInformationClientSchema.pre("save",async function (next) {
    if(this.isModified("originalPassword")) {
        this.originalPassword = await bcryptjs.hash(this.originalPassword, 10);
        this.confirmPassword = this.originalPassword;
        
    }
    next();
})

const user = new mongoose.model('userInformationClient',userInformationClientSchema);

module.exports = user;