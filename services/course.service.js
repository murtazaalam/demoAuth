const courses = require('../models/course');

class CourseService {
    static async getAllCourses(){
        try{
            return await courses.find();
        }catch(err){
            console.log(err);
            //throw err;
        }
    }
    static async getCourseById(id){
        try{
            return await courses.findById(id);
        }catch(err){
            throw err;
        }
    }
    static async getTopCourse(){
        try{
            return await courses.find({is_top_course:'true'}).limit(4);
        }catch(err){
            throw err;
        }
    }
}
module.exports = CourseService;