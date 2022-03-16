const cart = require('../models/cart');

class CartService{
    static async getItemByEmailAndCourseId(filter){
        try{
            return await cart.find(filter);
        }
        catch(err){
            throw new Error(err)
        }
    }
    static async getItemsByEmail(email){
        try{
            return await cart.find(email);
        }
        catch(err){
            throw new Error(err);
        }
    }
    static async removeById(id){
        try{
            return await cart.deleteOne(id);
        }
        catch(err){
            throw new Error(err);
        }
    }
    static async addItem(body){
        try{
            let item = new cart(body);
            return await item.save();
        }catch(err){
            throw new Error(err);
        }
    }
    static async removeByEmail(email){
        try{
            return await cart.deleteMany(email);
        }
        catch(err){
            throw new Error(err);
        }
    }
}
module.exports = CartService;