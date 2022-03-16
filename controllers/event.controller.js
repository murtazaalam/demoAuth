const EventService = require("../services/event.service");
class EventController {
    static async getAllEvents(req, res){
        if(req.query.type){
            let data = await EventService.getEventByCategory({type:req.query.type});
            res.send(data);
        }
        else if(req.query.status){
            let data = await EventService.getEventByCategory({status:req.query.status});
            res.send(data);
        }
        else{
            let data = await EventService.getAllEvents();
            res.send(data);
        }
    }
    static async getEventById(req, res){
        let data = await EventService.getEventById({_id:req.params.id});
        res.send(data);
    }
    static async registerForEvent(req, res){
        let data = await EventService.getRegistertedEvent({email:req.body.email});
        if(data) return res.status(400).json({message:"Already Registered"});
        let current = new Date();
        let registrationDetails = {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            registerDate: current
        }
        try {
            await EventService.register(registrationDetails)
            return res.status(201).json({message:"Registered Successfully"});
        } catch(err) {
            console.log("err=", err)
        }  
    }
}
module.exports = EventController;