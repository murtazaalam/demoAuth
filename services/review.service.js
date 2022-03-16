const review = require('../models/reviews');

class ReviewService{
    static async postReview(body){
        try{
            let newReview = new review(body);
            return await newReview.save();
        }catch(err){
            throw err;
        }
    }
}
module.exports = ReviewService;