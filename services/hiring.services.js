const hiring = require('../models/hiring');

class HiringService{
    static getHiring = async(filter) => { 
        try{
            return await hiring.findOne(filter)
        }
        catch(er){
            throw new Error(er)
        }
    }
    static postHiring = async(body) => {
        try{
            let newHiring = new hiring(body)
            return await newHiring.save()
        }catch(error){
            throw new Error(error)
        }
    }
}
module.exports = HiringService;