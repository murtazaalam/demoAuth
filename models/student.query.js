const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const query = new Schema({
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
    user_id:{
        type:String,
        unique:false,
        default:null,
        required:false
    },
    query:{
        type:String,
        unique:false,
        default:null,
        required:false
    }
});
module.exports = mongoose.model("query", query);