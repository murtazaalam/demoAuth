const envPath = process.env.NODE_ENV ? __dirname+"/.env."+process.env.NODE_ENV : __dirname+"/.env";
const dotEnv = require('dotenv');

const express = require('express');
dotEnv.config({path: envPath});

const connect = require('./config/db.config');
const authRoutes = require('./routes/auth.routes');
const mainRoutes = require('./routes/main.routes');
const port = process.env.PORT || 4000;
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());  

app.get('/', (req,res)=>{
    return res.send('Server Started');
})
app.use("/auth", authRoutes);
app.use("/", mainRoutes);
app.listen(port, ()=>{
    console.log("Listening ", port);
    connect((res) => {
        if(res) return console.log(">>",res)
        console.log("connected");
    })
});
