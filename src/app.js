const express = require('express')
const createError = require('http-errors')
const cors = require('cors')
require("dotenv").config()
require('./db.js')
const indexRouter=require('./router/indexRouter.js')

const app = express()

app.use(cors())

const swaggerUi=require('swagger-ui-express')
const swaggerDocumentConfig=require('../swagger-openapi.json')

app.use( express.json() )

app.use('/', indexRouter)

app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocumentConfig))

const notFound=(req, res, next)=>{
    next(createError(404,"No se encontro este endpoint"))
}
const errorHandler=(err,req,res,next)=>{
    res.status(err.status || 500)
    res.send({
        status: err.status || 500,
        message: err.message
    })
}

app.use(notFound)
app.use(errorHandler)

app.listen(3000, () => {
    console.log('listening on por http://localhost:3000/');
})