const blogs = require('../models/blog');

class BlogService {
    static getBlogs = async() => {
        try{
            return await blogs.find();
        }
        catch(err){
            throw new Error(err);
        }
    }
    static getBlog = async(filter) => {
        try{
            return await blogs.find(filter);
        }catch(err){
            throw new Error(err);

        }
    }
}
module.exports = BlogService;