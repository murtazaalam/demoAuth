const res = require('express/lib/response');
const BlogService = require('../services/blog.service');

class BlogController{
    static getAllBlogs = async(req, res) => {
        try{
            let data = await BlogService.getBlogs();
            res.send(data);
        }catch(err){
            throw new Error(err);
        }
    }
    static getBlogById = async(req, res) => {
        try{
            let data = await BlogService.getBlog({_id:req.params.id});
            res.send(data);
        }catch(err){
            throw new Error(err);
        }
    }
}
module.exports = BlogController;