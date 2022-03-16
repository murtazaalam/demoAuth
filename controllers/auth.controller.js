const UserService = require("../services/use.service");
const { jwtGenerator, jwtSignGenerator } = require("../utils/jwt");
const { generateOtp, sendOtp } = require("../utils/otp");
const bcrypt = require('bcryptjs');

class AuthController {
    static async login(req, res) {
        let data = await UserService.getUserByFilter({phone:req.body.phone});
        if(!data) return res.status(404).json({message:"User Not Found"});
        if(!data.isVerified){
            let fourDigitOtp = generateOtp(4);
            UserService.updateOtp({_id:data._id,otp:fourDigitOtp});
            return res.status(404).json({message:"User Unverified", otp:fourDigitOtp});
        } 
        const passIsValid = bcrypt.compareSync(req.body.password, data.password);
        if(!passIsValid) return res.status(400).json({message:"Incorrect Password"});
        let token = jwtGenerator({_id: data._id});
        await UserService.updateToken({_id:data._id,token});
        let userData = {
            name: data.name,
            phone: data.phone,
            isVerified: data.isVerified
        }
        res.status(200).json({message:"Login Success", token:token, user: userData});
    }
    static async register(req, res){
        let data = await UserService.getUserByFilter({phone:req.body.phone});
        if(data) return res.status(400).json({message:"User Already Exists"});
        let hashPassword = bcrypt.hashSync(req.body.password, 8);
        let token = jwtSignGenerator(req.body.phone);
        let current = new Date();
        let fourDigitOtp = generateOtp(4);
        try{
            //sendOtp(req.body.phone, fourDigitOtp);
        }
        catch(error){
            console.log("otp send error = ", error)
        }
        //send otp to mobile here
        let registerDetails = {
            name: req.body.name,
            phone: req.body.phone,
            password: hashPassword,
            token: token,
            otp:fourDigitOtp,
            createdBy: current,
            isVerified: false
        }
        
        try {
            let user = await UserService.newUser(registerDetails)
            return res.status(201).json({message:"User Registered But Not Verified", otp:fourDigitOtp})
        } catch(err) {
            console.log("===err===", err)
        }
    }
    static async verifyOtp(req, res){
        let data = await UserService.getUserByFilter({phone:req.body.phone});
        if(!data) return res.status(404).json({message:"User Not Found"});
        if(!data.isVerified){
            if(data.otp !== req.body.otp) return res.status(400).json({message:"Incorrect OTP"});
            await UserService.updateOtp({_id:data._id,otp:null,isVerified:true});
            let userData = {
                name: data.name,
                phone: data.phone,
                isVerified: !data.isVerified,
            }
            res.status(200).json({message:"Registration Successful", user:userData, token:data.token});
        }else{
            if(data.forgotCode !== req.body.otp) return res.status(400).json({message:"Incorrect Code"});
            await UserService.updateForgotCode({_id:data._id,forgotCode:null});
            res.status(200).json({message:"Forgot Passcode Verified"})
        }
    }
    static async resendOtp(req, res){
        let data = await UserService.getUserByFilter({phone:req.body.phone});
        if(!data) return res.status(404).json({message:"User Not Found"});
        let fourDigitOtp = generateOtp(4);
        //sendOtp(req.body.phone, fourDigitOtp);
        await UserService.updateOtp({_id:data._id,otp:fourDigitOtp});
        res.status(200).json({message:"New OTP Sent", otp:fourDigitOtp});
    }
    static async forgotPassword(req, res){
        let data = await UserService.getUserByFilter({phone:req.body.phone});
        if(!data) return res.status(404).json({message:"Success"});
        let fourDigitOtp = generateOtp(4);
        //sendOtp(req.body.phone, fourDigitOtp);
        await UserService.updateForgotCode({_id:data._id});
        res.status(200).json({message:"Password Reset Code Sent To Your Registered Mobile Number", forgotCode:fourDigitOtp});
    }
    static async updatePassword(req, res){
        let data = await UserService.getUserByFilter({phone:req.body.phone});
        if(!data) return res.status(404).json({message:"User Not Found"});
        if(data.forgotCode !== null) return res.status(404).json({message:"Verify Forgot Passcode"});
        let hashPassword = bcrypt.hashSync(req.body.password, 8);
        const passIsValid = bcrypt.compareSync(req.body.password, data.password);
        if(passIsValid) return res.status(400).json({message:"Password Must Be Different From Previous Password"});

        await UserService.updatePassword({_id:data._id,password:hashPassword});
        res.status(200).json({message:"Password Reset Successfully"});
    }
}
module.exports = AuthController;