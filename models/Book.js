const mongoose = require("mongoose")


const bookSchema = new mongoose.Schema({

    bookID : {type:String ,required:true , unique :true},
    title : String , 
    auther : String , 
 numperofbage:String
    

})

module.exports = mongoose.model("Book", bookSchema);