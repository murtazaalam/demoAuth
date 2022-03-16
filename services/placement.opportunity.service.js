const placementOpportunity = require('../models/placement.opportunity');

class placementOpportunityService{
    static getPlacementOpportunity = async(filter) => { 
        try{
            return await placementOpportunity.findOne(filter)
        }
        catch(er){
            throw new Error(er)
        }
    }
    static postPlacementOpportunity = async(body) => {
        try{
            let newOpportunity = new placementOpportunity(body)
            return await newOpportunity.save()
        }catch(error){
            throw new Error(error)
        }
    }
}
module.exports = placementOpportunityService;