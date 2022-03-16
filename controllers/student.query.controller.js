const StudentQueryService = require("../services/student.query.service");

class StudentQueryController{
    static addStudentQuery(req, res){
        try{
            let queryData;
            if(req.user){
                queryData = {
                    name: req.user.name,
                    email: req.user.email,
                    user_id: req.user._id,
                    query: req.body.query
                }
            }else{
                queryData = {
                    name: req.body.name,
                    email: req.body.email,
                    user_id: null,
                    query: req.body.query
                }
            }
            let newQuery = StudentQueryService.addQuery(queryData);
            return res.status(201).json({message:"Query Sent",query:newQuery});
        }catch(err){
            return res.status(500).json({message:"Invalid Request",err})
        }
    }
}
module.exports = StudentQueryController;