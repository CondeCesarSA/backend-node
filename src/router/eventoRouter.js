const express=require('express')
const eventoRouter=express.Router()
const eventoController=require('../controllers/eventoControllers')
const {verifyData, verifyId}=require('../middlewares/verifications')

eventoRouter.get('/', eventoController.getEventos)
eventoRouter.get('/:name', eventoController.getOneEventoByName)
eventoRouter.post('/', verifyData, eventoController.createEvento)
eventoRouter.post('/many', eventoController.createEventos)
eventoRouter.put('/:id', verifyData,eventoController.updateEventoByID)
eventoRouter.delete('/:name', eventoController.deleteEventoByName)


module.exports = eventoRouter