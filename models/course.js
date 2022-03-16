const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const techvanto_courses = new Schema({
    is_top_course:{
        type:String,
        unique:false,
        default:null,
        required:false
    }
});
module.exports = mongoose.model("techvanto_courses",techvanto_courses);