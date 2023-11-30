const { Schema } = require("mongoose")
const mongoose=require('mongoose')


const userSchema = new Schema ({
    email:{type:"string"},
    password:{type:"string"},
    role:{type:"string",default:"user"},
    name:{type:"string"},
    lastName:{type:"string"},
    age:{type: Number}
})


const userModel = mongoose.model("User", userSchema)


module.exports= userModel