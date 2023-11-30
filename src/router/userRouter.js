const express=require('express')
const userRouter=express.Router()
const {verifyData, verifyId}=require('../middlewares/verifications')
const authController = require('../controllers/authController')


userRouter.post('/register', authController.createUser)
// userRouter.get('/', authController.obtenerUser)


module.exports = userRouter