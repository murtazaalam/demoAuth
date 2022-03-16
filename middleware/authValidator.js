const UserService = require('../services/use.service');
const {jwtVerify} = require('../utils/jwt');

class AuthValidator {
    static async authValidate(req, res, next) {
        try{
            let payload = jwtVerify(req.headers.token);
            let data = await UserService.getUserByToken({token:req.headers.token});
            if(!data) return res.status(401).json({message:"Session Expired"});
            req.user = data;
            next();
        }catch(err){
            return res.status(401).json({message:"Unauthorized"});
        }
    }
    static async queryAuthValidate(req, res, next) {
        if(req.headers.token === ""){
            next();
        }
        else{
            try{
                let payload = jwtVerify(req.headers.token);
                let data = await UserService.getUserByToken({token:req.headers.token});
                if(!data) return res.status(401).json({message:"Session Expired"});
                req.user = data;
                next();
            }catch(err){
                return res.status(401).json({message:"Unauthorized"});
            }
        }
    }
}
module.exports = AuthValidator;