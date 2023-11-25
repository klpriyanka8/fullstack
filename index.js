const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const userData=require('./model')

const app=express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const PORT=5000

mongoose.connect('mongodb://0.0.0.0:27017/SASTRA')
.then(()=>{
    console.log('Database is connected')
    app.listen(PORT,()=>console.log("Server is running"))
})
.catch((err)=>{
    console.log(err)
})

//GET
app.get('/displaycustomer',async (req,res)=>{
    try{
        const response=await userData.find()
        return res.status(200).json({success:true,data:response})
    }
    catch(err){
        return res.status(400).json({success:false,msg:`Error : ${err}`})
    }
})

//POST
app.post('/createcustomer',async(req,res)=>{
    try{
        await userData.create(req.body)
        return res.status(200).json({success:true,msg:"Data submitted successfully"})
    }
    catch(err){
        return res.status(400).json({success:false,msg:`Error :${err}`})
    }
})

//PUT
app.put('/updatecustomer/:_id',async(req,res)=>{
    try{
        await userData.updateOne({_id:req.params._id},req.body)
        return res.status(200).json({success:true,msg:"Data updates successfully"})
    }
    catch(err){
        return res.status(400).json({success:false,msg:`Error :${err}`})
    }
})

//DELETE
app.delete('/deletecustomer/:CustomerNumber',async(req,res)=>{
    try{
        await userData.deleteOne({CustomerNumber:req.params.CustomerNumber})
        return res.status(200).json({success:true,msg:"Data deleted successfully"})
    }
    catch(err){
        return res.status(400).json({success:false,msg:`Error :${err}`})
    }
})

//SEARCH
app.get('/searchcustomer/:CustomerNumber',async(req,res)=>{
    try{
        const info=await userData.findOne({CustomerNumber:req.params.CustomerNumber})
        if(info)
        {
            return res.status(200).json({success:true,data:info})
        }
        else
        {
            return res.json({success:false,msg:"Data not found"})
        }
        
    }
    catch(err){
        return res.status(200).json({success:false,msg:`Error :${err}`})
    }
})