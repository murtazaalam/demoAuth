const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const events = new Schema({
    type:{
        type:String,
        unique: false,
        required: false
    },
    status:{
        type:String,
        unique: false,
        required: false
    }
});
module.exports = mongoose.model("events",events);