const events = require('../models/event');
const eventRegister = require('../models/event.register');

class EventService {
    static async getAllEvents(){
        try{
            return await events.find();
        }catch(err){
            throw err;
        }
    }
    static async getEventByCategory(filter){
        try{
            return await events.find(filter);
        }catch(err){
            throw err;
        }
    }
    static async getEventById(id){
        try{
            return await events.findById(id);
        }catch(err){
            throw err;
        }
    }
    static async getRegistertedEvent(filter){
        try{
            return await eventRegister.findOne(filter)
        }catch(err){
            throw err;
        }
    }
    static async register(body){
        try{
            let newRegistration = new eventRegister(body)
            return await newRegistration.save()
        }catch(error){
            throw error;
        }
    }
}
module.exports = EventService;