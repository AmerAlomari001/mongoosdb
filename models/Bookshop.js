const mongoose = require("mongoose")


const BookshopSchema = new mongoose.Schema({

    BookshopID : {type:String ,required:true , unique :true},
    locaition : String , 
   

})

module.exports = mongoose.model("Bookshop", BookshopSchema);