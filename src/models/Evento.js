const mongoose=require('mongoose')

const mongooseSchema=mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    place:{
        type: String,
        required:true
    },
    price:{
        type: Number,
        required: true
    },
    capacity:{
        type: Number,
        required: true 
    },
    assistance:{
        type: Number,
        required: false
    },
    estimate:{
        type: Number,
        required: false
    }



})

const Evento= mongoose.model("Eventos", mongooseSchema)


module.exports= Evento