const express = require('express')
const Cars = require('../models/car')

const router = express.Router()

//------------------- post -----------------
router.post('/Cars' , (req,res)=>{

    console.log(req.body)
    const car = new Cars(req.body)
    car.save()
    .then((car)=>{res.status(200).send(car)})
    .catch((error)=>{res.status(400).send(error)})
})

// ------------------ get ------------------

router.get('/Cars/:id' ,(req,res)=>{
    const _id = req.params.id

    Cars.findById(_id)
    .then((car)=>{
        if(!car){
            return res.status(404).send("id is not found")
        }
        res.status(200).send(car)
    })
    .catch((error)=>{res.status(400).send(error)})
})

//------------------ patch --------------------------
// router.patch('/Cars/:id', async (req,res)=>{
//     try {
//         const _id = req.params.id
//         const car = await Cars.findByIdAndUpdate(_id , (req,res) ,{
//             new : true ,
//             runValidators : true
//         })
//         if(!car){
//             return res.status(404).send("No car found")
//         }
//         res.status(200).send(car)
//     } 
//     catch (error) {
//         res.status(400).send(error)
//     }
    
// })

router.patch('/Cars/:id' , async (req,res)=>{
    try {
        const _id = req.params.id
        const car = await Cars.findByIdAndUpdate(_id , req.body ,{
            // بيعدل علي الداتا وبيجيب البيانات القديمة
            new: true,
            //علشان يطبق شروط المودل اللي انا كاتبه
            runValidators: true,
        })
        if(!car){
            return res.status(404).send('No User found')
        }
        res.status(200).send(car)
    }
    catch (error) {
        res.status(400).send(error)
    }
})

//---------------- delete ------------------
router.delete('/Cars/:id', async (req,res)=>{
    try {
        const _id = req.params.id
        const car = await Cars.findByIdAndDelete(_id)
        if(!car){
            return res.status(404).send("No car found")
        }
        res.status(200).send(car)
    }
    catch(error){
        res.status(400).send(error)
    }
})



module.exports = router;