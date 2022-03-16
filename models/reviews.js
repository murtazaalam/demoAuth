const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviews = new Schema({
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
    comment:{
        type:String,
        unique:false,
        default:null,
        required:false
    }
});

module.exports = mongoose.model("reviews", reviews);