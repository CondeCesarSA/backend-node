const userModel = require("../models/User")
const { createUser } = require("../services/userService")


const authController = {
    
    createUser: async (req,res)=>{
        try{
            const payload = req.body
            userCreated = await createUser(payload)
            if(userCreated){
               return res.status(201).json({message:"User created susesfully"})
            }
            else{
                res.status(400).json({message:"Wrong on create user"})
            }

        }catch(e){
            res.status(500).json({ message:e.message})
        }
    },

}


module.exports = authController