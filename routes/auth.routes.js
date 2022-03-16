const AuthController = require('../controllers/auth.controller');
const { loginValidator, registerValidator, passwordValidator } = require('../validator/auth.validator');

const authRoutes = require('express').Router();

authRoutes.post('/login',loginValidator, AuthController.login)
authRoutes.post('/register', registerValidator, AuthController.register)
authRoutes.post('/verify-otp', AuthController.verifyOtp);
authRoutes.post('/resend-otp', AuthController.resendOtp);
authRoutes.post('/forgot', AuthController.forgotPassword);
authRoutes.post('/update-password', passwordValidator, AuthController.updatePassword);
module.exports = authRoutes;