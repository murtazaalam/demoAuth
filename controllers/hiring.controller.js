const HiringService = require('../services/hiring.services');

class HiringController{
    static async hiring(req, res){
        let data = await HiringService.getHiring({email:req.body.email});
        if(data) return res.status(400).json({message:"Already Applied"});
        let current = new Date();
        let hiringDetails = {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            profile: req.body.profile,
            postedOn: current
        }
        try {
            await HiringService.postHiring(hiringDetails)
            return res.status(201).json({message:"Applied Successfully"});
        } catch(err) {
            console.log("err=", err)
        }  
    }
}
module.exports = HiringController;