const Contact=require('../models/curd')


const display=async(req,res)=>{
    const contacts=await Contact.find()
    // res.json(contacts)
     res.render('home',{contacts})
}

const singleUser=async (req,res)=>{
    const contact=await Contact.findOne({_id:req.params.id})
    res.render('show-contact',{contact})
}

const displayForm=(req,res)=>{
    res.render('add-contact')
}

const saveData=async(req,res)=>{
    await Contact.create(req.body)
    res.redirect('/')
}

const updatePage=async (req,res)=>{
  const contact =await Contact.findById(req.params.id)
    res.render('update-contact',{contact})  
}

const updateData=async (req,res)=>{
    await Contact.findByIdAndUpdate(req.params.id,req.body)
    res.redirect('/')
}

const deleteData=async(req,res)=>{
    await Contact.findByIdAndDelete(req.params.id)
    res.redirect('/')
}

module.exports={
    display,
    singleUser,
    displayForm,
    saveData,
    updatePage,
    updateData,
    deleteData
}