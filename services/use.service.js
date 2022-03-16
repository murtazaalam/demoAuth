const user = require('../models/user');
class UserService {
    static async getUserByFilter(filter){
        try{
            return await user.findOne(filter)
        }
        catch(er){
            throw new Error(er)
        }
    }
    static async updateOtp(updateCredentials){
        try{
            return await user.updateOne(
                {_id:updateCredentials._id},
                {
                    $set:{
                        "otp":updateCredentials.otp,
                        "isVerified":updateCredentials.isVerified ? updateCredentials.isVerified : false
                    }
                }
            )
        }
        catch(er){
            throw new Error(er)
        }
    }
    static async updateForgotCode(forgotCode){
        try{
            return await user.updateOne(
                {_id:forgotCode._id},
                {
                    $set:{
                        "forgotCode":forgotCode.forgotCode
                    }
                }
            )
        }
        catch(er){
            throw new Error(er)
        }
    }
    static async updateToken(data){
        return await user.updateOne(
            {_id:data._id},
            {
                $set:{
                    "token":data.token
                }
            }
        )
    }
    static async getUserByToken(token){
        try{
            return await user.findOne(token)
        }catch(err){
            throw new Error(err);
        }
    }
    static async newUser(body){
        try{
            let newUser = new user(body)
            return await newUser.save()
        }catch(error){
            throw new Error(error);
        }
    }
    static async updatePassword(newPassword){
        return await user.updateOne(
            {_id: newPassword._id},
            {
                $set:{
                    "password":newPassword.password
                }
            }
        )
    }
}
module.exports = UserService;