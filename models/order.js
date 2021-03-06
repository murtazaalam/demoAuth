const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orders = new Schema({
    user_id:{ 
        type:String,
        unique:false,
        default:null,
        required:false
    },
    total_amount:{
        type:String,
        unique:false,
        default:null,
        required:false
    },
    payment_status:{
        type:String,
        unique:false,
        default:null,
        required:false
    },
    cart_item:{
        type:Array,
        unique:false,
        default:null,
        required:false 
    },
    order_id:{
        type:String,
        unique:false,
        default:null,
        required:false
    },
    receipt_no:{
        type:String,
        unique:false,
        default:null,
        required:false
    },
    payment_status:{
        type:String,
        unique:false,
        default:null,
        required:false
    },
    sub_total:{
        type:String,
        unique:false,
        required:false
    },
    total_discount:{
        type:String,
        unique:false,
        required:false
    },
    refree_name:{
        type:String,
        unique:false,
        required:false
    },
    created_by:{
        type:Date,
        unique:false,
        required:false
    },
    order_type:{
        type:String,
        unique:false,
        required:false
    },
    techvanto_order_id:{
        type:String,
        unique:false,
        required:false
    },
    //new
    payment_id:{
        type:String,
        unique:false,
        required:false
    }
})
module.exports = mongoose.model("orders",orders)