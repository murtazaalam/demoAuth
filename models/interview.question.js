const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const interviewQuestions = new Schema({});
module.exports = mongoose.model("interview_questions",interviewQuestions);