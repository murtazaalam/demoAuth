const referals = require('../models/referal');
class ReferalService {
    static getReferals = async() => {
        try{
            return await referals.find();
        }
        catch(err){
            throw new Error(err);
        }
    }
}
module.exports = ReferalService;