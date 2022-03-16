const mongoose = require('mongoose');
let url = process.env.MONGO_URL;
console.log(url)
let connect = (result) => {
    mongoose.connect(url, (err) => {
        if(err) return result(err)
        result()
    })
}
module.exports = connect;