const express = require("express")

const router = express.Router()

const bookshop = require("../models/Bookshop")
const Bookshop = require("../models/Bookshop")



// add a new bookshop 

router.post('/',async (req,res)=>{
    try {
        const bookshop = new Bookshop(req.body)

        await bookshop.save()

        res.status(201).send(bookshop)
    } catch (error) {

        res.status(400).send(error)
        
    }


})



// get all bookshops 

router.get("/", async (req,res)=>{

    const bookshop = await Bookshop.find()

    res.send(bookshop)
})


// get bookshop by id 

router.get("/:id",async(req,res)=>{
    const bookshop = await Bookshop.findOne({BookshopID:req.params.id})
    if(!bookshop) return res.status(400).send("bookshop not found ")

        res.send(bookshop)
})



module.exports=router; 