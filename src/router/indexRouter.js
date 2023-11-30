const express = require("express");

const indexRouter = express.Router();

const eventoRouter=require('./eventoRouter')
const userRouter = require("./userRouter")

indexRouter.get('/', (req, res) => {
    res.send("Index")
})


indexRouter.use('/eventos',eventoRouter)
indexRouter.use('/user', userRouter)


module.exports = indexRouter