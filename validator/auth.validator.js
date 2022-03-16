const { body, validationResult } = require("express-validator");

exports.loginValidator = [
    body("phone"),
    body("password"),
    async(req, res, next) =>{
        let err = validationResult(req)
        err = err.array()
        if(err.length > 0) return res.status(400).json({error:err})
        next()
    }
]
exports.registerValidator = [
    body("name"),
    body("phone"),
    body("password").isStrongPassword().withMessage("Weak Password"),
    async(req, res, next) =>{
        let err = validationResult(req)
        err = err.array()
        if(err.length > 0) return res.status(400).json({error:err})
        next()
    }
]
exports.passwordValidator = [
    body("phone"),
    body("password").isStrongPassword().withMessage("Weak Password"),
    async(req, res, next) => {
        let err = validationResult(req)
        err = err.array()
        if(err.length > 0) return res.status(400).json({error:err})
        next()
    }
]
