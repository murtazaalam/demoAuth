const CourseService = require("../services/course.service");

class CoursesController {
    static async getAllCourses(req, res){
        let data = await CourseService.getAllCourses();
        res.send(data);
    }
    static async getCourseById(req, res){
        let data = await CourseService.getCourseById({_id:req.params.id});
        res.send(data);
    }
    static async getTopCourses(req, res){
        let data = await CourseService.getTopCourse();
        res.send(data);
    }
}
module.exports = CoursesController;