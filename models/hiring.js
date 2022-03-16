const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hiring = new Schema({
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
    profile:{
        type:Array,
        unique:false,
        default:null,
        required:false
    },
    postedOn:{
        type: Object,
        required: false,
        unique: false
    }
});

module.exports = mongoose.model("hiring",hiring);