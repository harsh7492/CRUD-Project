require('dotenv').config()
const { config } = require('dotenv')
const mongoose=require('mongoose')
const connectdb=()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>console.log('Databse Connected Successfully'))
}
module.exports=connectdb
