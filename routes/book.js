const express = require("express")

const router = express.Router()

const book = require("../models/Book")
const Book = require("../models/Book")



// add a new book 

router.post('/',async (req,res)=>{
    try {
        const book = new Book(req.body)

        await book.save()

        res.status(201).send(book)
    } catch (error) {

        res.status(400).send(error)
        
    }


})



// get all book 

router.get("/", async (req,res)=>{

    const book = await Book.find()

    res.send(book)
})


// get book by id 

router.get("/:id",async(req,res)=>{
    const book = await Book.findOne({bookID:req.params.id})
    if(!book) return res.status(400).send("book not found ")

        res.send(book)
})


// update book information 

router.put("/:id",async (req,res)=>{
    const book = await Book.findOneAndUpdate({bookID:req.params.id},req.body)
    if(!book) return res.status(400).send("book not found ")
        res.send(book)
})

// delete book 

router.delete("/:id", async (req,res)=>{
    const results = await book.deleteOne({bookID:req.params.id})

    if(results.deletedCount===0) return res.status(404).send("book not found")

        res.send({message:"book has been deleted"})

})

module.exports=router; 