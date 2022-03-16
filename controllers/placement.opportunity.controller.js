const placementOpportunityService = require('../services/placement.opportunity.service');

class PlacementOpportunityController{
    static async placement(req, res) {
        let data = await placementOpportunityService.getPlacementOpportunity({email:req.body.email});
        if(data) return res.status(400).json({message:"Already Applied"});
        let current = new Date();
        let placementOpportunityDetails = {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            profile: req.body.profile,
            postedOn: current
        }
        try {
            await placementOpportunityService.postPlacementOpportunity(placementOpportunityDetails)
            return res.status(201).json({message:"Applied Successfully"});
        } catch(err) {
            console.log("err=", err)
        }  
    }
}
module.exports = PlacementOpportunityController;