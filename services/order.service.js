const order = require('../models/order');
class OrderService {
    static async addOrder(body){
        try{
            let item = new order(body);
            return await item.save();
        }catch(err){
            throw new Error(err);
        }
    }
    static async updateOrder(id, status, paymentId){//new
        try{
            return await order.updateOne(
                {order_id:id},
                {
                    $set:{
                        "payment_status":status,
                        "payment_id":paymentId
                    }
                }
            )
        }
        catch(err){
            throw new Error(err);
        }
    }
    static async baughtOrder(filter){
        try{
            return await order.find(filter)
        }
        catch(err){
            throw new Error(err);
        }
    }
}
module.exports = OrderService;