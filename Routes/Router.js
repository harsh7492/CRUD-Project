const express=require('express')
const router=express.Router()
const userControler=require('../controller/usercontroller')

router.get('/',userControler.display)
router.get('/show/:id',userControler.singleUser)
router.get('/add',userControler.displayForm)
router.post('/add',userControler.saveData)
 

router.get('/update/:id',userControler.updatePage)

router.post('/update/:id',userControler.updateData)

router.get('/delete/:id',userControler.deleteData)

module.exports=router