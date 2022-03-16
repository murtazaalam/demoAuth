const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogs = new Schema({});
module.exports = mongoose.model("blogs",blogs);