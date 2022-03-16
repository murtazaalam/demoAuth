const CartService = require('../services/cart.service');

class CartController {
    static async addToCart(req, res){
        let itemData = {};
        let currentDate = new Date();
        if(req.body.course_type === 'course'){
            let data = await CartService.getItemByEmailAndCourseId({email:req.user.email,course_id:req.body.course_id});
            if(data.length > 0) return res.status(400).json({message:"Item Already Added"});
            itemData = {
                course_type: req.body.course_type,
                course_name:req.body.course_name,
                registration_fee: req.body.registration_fee ? req.body.registration_fee : 0,
                course_image:req.body.course_image,
                description:req.body.description,
                avg_rating:req.body.avg_rating,
                gradient:req.body.gradient,
                reviews:req.body.reviews,
                discount:req.body.discount,
                course_id:req.body.course_id,
                price:req.body.price,
                booking_date: currentDate,
                pay_status:"pending",
                email:req.user.email
            }
        }
        else if(req.body.course_type === 'event'){
            let data = await CartService.getItemByEmailAndCourseId({email:req.user.email,event_id:req.body.event_id});
            if(data.length > 0) return res.status(400).json({message:"Item Already Added"});
            itemData = {
                course_type:req.body.course_type,
                event_name:req.body.event_name,
                event_description: req.body.event_description,
                event_image:req.body.event_image,
                event_date:req.body.event_date,
                event_id:req.body.event_id,
                price:req.body.price ? req.body.price : 0,
                booking_date: currentDate,
                pay_status:"pending",
                email:req.user.email
            }
        }
        let newItem = await CartService.addItem(itemData);
        return res.status(201).json({message:"Item Added",item:newItem});
    }
    static async getFromCartByEmail(req, res){
        let data = await CartService.getItemsByEmail({email:req.user.email})
        res.send(data);
    }
    static async removeFromCart(req, res){
        let data = await CartService.removeById({_id:req.params.id});
        res.send(data);
    }
}
module.exports = CartController;