 const mongoose = require('mongoose');
 const Schema = mongoose.Schema;

 const cart = new Schema({
    course_name:{
        type:String,
        unique:false,
        required:false
    },
    course_image:{
        type:String,
        unique:false,
        required:false
    },
    description:{
        type:String,
        unique:false,
        required:false
    },
    avg_rating:{
        type:String,
        unique:false,
        required:false
    },
    gradient:{
        type:String,
        unique:false,
        required:false
    },
    reviews:{
        type:String,
        unique:false,
        required:false
    },
    discount:{
        type:String,
        unique:false,
        required:false
    },
    course_id:{
        type:String,
        unique:false,
        required:false
    },
    event_id:{
        type:String,
        unique:false,
        required:false
    },
    email:{
        type:String,
        unique:false,
        default:null,
        required:false
    },
    price:{
        type:String,
        unique:false,
        default:null,
        required:false
    },
    course_type:{
        type:String,
        unique:false,
        default:null,
        required:false
    },
    event_name:{
        type:String,
        unique:false,
        required:false
    },
    event_image:{
        type:String,
        unique:false,
        required:false
    },
    event_date:{
        type:String,
        unique:false,
        required:false
    },
    registration_fee:{
        type:String,
        unique:false,
        required:false
    },
    event_description:{
        type:Array,
        unique:false,
        required:false
    },
    booking_date:{
        type:Date,
        unique:false,
        required:false
    },
    pay_status:{
        type:String,
        unique:false,
        required:false
    }
 })
 module.exports = mongoose.model("carts",cart)