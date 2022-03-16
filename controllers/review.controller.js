const ReviewService = require('../services/review.service');

class ReviewController{
    static async addReview(req, res){
        try{
            let reviewBody = {
                name: req.body.name,
                email: req.body.email,
                comment: req.body.comment
            }
            await ReviewService.postReview(reviewBody);
            return res.status(201).json({message:"Thanks For Your Review"});
        }catch(error){
            console.log("err=", error)
        }
    }
}
module.exports = ReviewController;