const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const user = new Schema({
    name:{
        type: String,
        unique:false,
        default: null,
        required: false
    },
    phone:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        default: null,
        required: true
    },
    token:{
        type: String,
        required: false,
        unique: false
    },
    createdBy:{
        type: Object,
        required: false,
        unique: false
    },
    isVerified:{
        type: Boolean,
        required: false,
        unique: false
    },
    otp:{
        type: String,
        required: false,
        unique: false
    },
    forgotCode:{
        type: String,
        required: false,
        unique: false
    }
})
module.exports = mongoose.model("users",user);