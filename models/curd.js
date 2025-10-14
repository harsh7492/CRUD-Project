const mongoose=require('mongoose')
const detail=mongoose.Schema(
    {
        first_name:{
            type:String
        },
        last_name:{
            type:String
        },
        email:{
            type:String
        },
        phone:{
            type:String
        },
        address:{
            type:String
        }
    }
)
const contact=mongoose.model("Contact",detail)
//first parameter collection second is validation
module.exports=contact
//after that export contact