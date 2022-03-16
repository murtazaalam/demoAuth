const interviewQuestions = require('../models/interview.question');

class InterviewQuestionService{
    static getAllQuestions = async() => {
        try{
            return interviewQuestions.find();
        }catch(err){
            throw new Error(err);
        }
    }
}
module.exports = InterviewQuestionService