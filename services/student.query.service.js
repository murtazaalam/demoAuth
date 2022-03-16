const query = require('../models/student.query');

class StudentQueryService {
    static addQuery = (body) => {
        try{
            let item = new query(body);
            return item.save();
        }catch(err){
            throw new Error(err);
        }
    }
}
module.exports = StudentQueryService;