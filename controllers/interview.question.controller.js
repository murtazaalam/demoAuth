const InterviewQuestionService = require('../services/interview.question.service');

class InterviewQuestionController{
    static getInterviewQuestion = async(req, res) => {
        try{
            let data = await InterviewQuestionService.getAllQuestions();
            res.send(data);
        }catch(err){
            throw new Error(err);
        }
    }
}
module.exports = InterviewQuestionController