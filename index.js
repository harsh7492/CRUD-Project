const express=require("express")
const app=new express()
const mongoose=require("mongoose")
const Contact=require("./models/curd")
//connection to mongodb
//first step 
mongoose.connect('mongodb://127.0.0.1:27017/Crud')
.then(()=>console.log('Databse Connected Successfully'))

//middleware
app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}))
//for form
//it use when post method use when you submit it conver ot into json format

//Routing
app.get('/',async(req,res)=>{
    const contacts=await Contact.find()
    // res.json(contacts)
     res.render('home',{contacts})
})
app.get('/show/:id',async (req,res)=>{
    const contact=await Contact.findOne({_id:req.params.id})
    res.render('show-contact',{contact})
})
app.get('/add',(req,res)=>{
    res.render('add-contact')
})
app.post('/add',async(req,res)=>{
    await Contact.create(req.body)
    res.redirect('/')
})
 

app.get('/update/:id',async (req,res)=>{
  const contact =await Contact.findById(req.params.id)
    res.render('update-contact',{contact})  
})

app.post('/update/:id',async (req,res)=>{
    await Contact.findByIdAndUpdate(req.params.id,req.body)
    res.redirect('/')
})
app.get('/delete/:id',async(req,res)=>{
    await Contact.findByIdAndDelete(req.params.id)
    res.redirect('/')
})



app.listen(3000,(req,res)=>{
    console.log("Server Connected successfully");
})
