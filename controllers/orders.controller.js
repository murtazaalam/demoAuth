const OrderService = require('../services/order.service');
const CartService = require('../services/cart.service');
const { generateOrder, verifyOrder } = require('../helper/razorpay');
const { generateOtp } = require('../utils/otp');

class OrderController{
    static async addToOrder(req, res){
        try{
            let orderData = {};
            let techvantoOrderId = "tech_order_"+generateOtp(6);
            if(req.body.order_type === "paid"){
                var options = {
                    amount: parseInt(req.body.total_amount)*100,  // amount in the smallest currency unit
                    currency: "INR",
                    receipt: new Date().getTime()
                };
                let response = await generateOrder(options);
                orderData = {
                    user_id:req.user.phone,
                    order_id:response.id,
                    total_amount:response.amount,
                    receipt_no: response.receipt,
                    payment_status:"pending",
                    sub_total: req.body.sub_total,
                    total_discount: req.body.total_discount,
                    cart_item:req.body.cart_item,
                    refree_name:req.body.refree_name,
                    order_type:req.body.order_type,
                    created_by: new Date(),
                    techvanto_order_id: techvantoOrderId,
                    payment_id:""//new
                }
                let newOrder = OrderService.addOrder(orderData);
                return res.status(201).json({message:"Order Added",order:newOrder,response});
            }
            else{
                orderData = {
                    user_id:req.user.phone,
                    order_id:null,
                    total_amount:0,
                    receipt_no: null,
                    payment_status:"success",
                    cart_item:req.body.cart_item,
                    refree_name:req.body.refree_name,
                    order_type:req.body.order_type,
                    created_by: new Date(),
                    techvanto_order_id: techvantoOrderId,
                    payment_id:""
                }
                let newOrder = OrderService.addOrder(orderData);
                if(newOrder){
                    orderData.cart_item.forEach((item) => {
                        CartService.removeById({_id:item.data._id})
                    })
                }
                return res.status(201).json({message:"Order Added",order:orderData});
            }
            
        }catch(err){
            return res.status(500).json({message:"Invalid Request",err:err});
        }
    }
    static async verifyOrder(req, res){
        let orderVerify = await verifyOrder(req.body.razorpay_payment_id,req.body.order_id,req.body.cart_item.cart_item); 
        if(orderVerify === "captured") return res.status(200).json({message:"Payment Success"});
        return res.status(201).json({message:"Payment Failed"});
        
    }
    static async myOrder(req, res){
        try{
            let data = await OrderService.baughtOrder({
                user_id:req.user.email,
                payment_status:"success"
            });
            let orderItem = [];
            data.forEach(item => {
                item.cart_item.forEach(cartItem => {
                    orderItem.push(cartItem); 
                })
            })
            res.send(orderItem);
        }
        catch(err){
            console.log(err);
        }        
    }
}
module.exports = OrderController;