const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const registered_events = new Schema({
    name:{
        type:String,
        unique:false,
        default:null,
        required:false
    },
    email:{
        type:String,
        unique:false,
        default:null,
        required:false
    },
    phone:{
        type:String,
        unique:false,
        default:null,
        required:false
    },
    registerDate:{
        type: Object,
        required: false,
        unique: false
    }
});
module.exports = mongoose.model("registered_events",registered_events);