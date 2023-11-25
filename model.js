const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    CustomerName:String,
    CustomerNumber:{type:String,unique:true},
    City:String,
    State:String,
    Pincode:String
})

const userData=mongoose.model("Company",userSchema)

module.exports=userData
