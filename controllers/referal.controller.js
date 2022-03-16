const res = require('express/lib/response');
const ReferalService = require('../services/referal.service');
class ReferalController{
    static getAllReferals = async(req, res) => {
        try{
            let data = await ReferalService.getReferals();
            res.send(data);
        }catch(err){
            throw new Error(err);
        }
    }
}
module.exports = ReferalController;