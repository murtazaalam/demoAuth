const Razorpay = require('razorpay');
const CartService = require('../services/cart.service');
const OrderService = require('../services/order.service');

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY,
    key_secret: process.env.RAZORPAY_SECRET,
});
exports.generateOrder = async (option) => {
    try{
        let x = await razorpay.orders.create(option);
        return x;
    }
    catch(err){
        throw new Error(err);
    }
}
exports.verifyOrder = async (paymentId, orderId, cartItem) => {

    try{
        console.log(">>>>",process.env.RAZORPAY_KEY)
        return await razorpay.payments.fetch(paymentId).then(async(response) => {
            if(response.status === "captured"){
                OrderService.updateOrder(orderId, "success", paymentId);//new
                cartItem.forEach((item) => {
                    CartService.removeById({_id:item.data._id});
                })
                return response.status
            }else{
                return await OrderService.updateOrder(orderId, "failed", paymentId);
                
            }

        }).catch((err) =>{
            console.log(err);
        })
    }
    catch(err){
        throw new Error(err);
    }
}