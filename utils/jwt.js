const jwt = require('jsonwebtoken');

const jwtGenerator = (payload) => {
    try{
        return jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:"24h"});
    }
    catch(err){
        console.log(err)
    }
}
const jwtSignGenerator = (payload) => {
    try{
        return jwt.sign(payload,process.env.JWT_SECRET);
    }
    catch(err){
        console.log(err)
    }
}
const jwtVerify = (token) => {
    try{
        let x = jwt.verify(token,process.env.JWT_SECRET)
        return x;

    }catch(err){
        throw new Error(err);
    }
}
module.exports = {
    jwtGenerator,
    jwtSignGenerator,
    jwtVerify
}