//Basic Import Section
const express=require('express');
const app=express();


//Middleware
app.use(express.json());



//db connection
const dbconnect = require('./config/dbconnect');
dbconnect();


//port listen
app.listen(3000, ()=> console.log('>>>SERVER ONLINE'));