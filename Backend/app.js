require('dotenv').config()

const express = require('express');
const cors = require ('cors');
const dogsRoutes = require('./routes/dogs')
const connectDB = require('./config/db');

const app = express();
connectDB();

app.use(cors());
app.use(express.json({limit:"50mb"}));
app.use(express.urlencoded({limit:"50mb", extended:true}));

app.use(express.json())
app.use((req,res,next) =>{
    console.log("New Request");
    console.log("host: ", req.hostname);
    console.log("path: ", req.path);
    console.log("method: ", req.method);
    next();
})
app.use('/api/dogs', dogsRoutes)


app.listen(process.env.port, () => console.log('Server running on port', process.env.port));