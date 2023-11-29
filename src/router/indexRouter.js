const express = require("express");

const indexRouter = express.Router();

const eventoRouter=require('./eventoRouter')

indexRouter.get('/', (req, res) => {
    res.send("Index")
})

indexRouter.use('/eventos',eventoRouter)



module.exports = indexRouter