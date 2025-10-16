const express=require("express")
const app=new express()
const mongoose=require("mongoose")
const Contact=require("./models/curd")
const connectdb = require("./config/db")
const userRouter=require('./Routes/Router')
//connection to mongodb
//first step 
connectdb()
//middleware
app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}))
//for form
//it use when post method use when you submit it conver ot into json format

//Routing
app.use(userRouter)

const PORT=process.env.PORT|3000
app.listen(PORT,(req,res)=>{
    console.log("Server Connected successfully");
})
//spilting multiple compoments seprate using model view controller efficeent for changing and reuse
//controllerr is a boss contain logic manage everything
//url go to controller by routing and requset to model and process data send response dATA RAW =JSON THEN IT GO TO VIEW THEN IT WORK SEPRATE LIKE EVER  IN DIFFRENT FOLDER
//logic data base