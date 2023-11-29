const Evento = require('../models/Evento')

const eventoDAL = {
    getEventos: async () => {
        return await Evento.find()

    },
    getOneEvento: async (name) => {
        return await Evento.findOne({ name: name });
    },
    createEvento: async (eventoNuevo) => {
        return await Evento.create(eventoNuevo)
    },
    updateEvento: async (idEventoActualizar, datosActualizados) => {
        return await Evento.findOneAndUpdate({ _id: idEventoActualizar }, datosActualizados, { new: true });
    },
    deleteEvento: async (nombreEvento) => {
        return await Evento.deleteOne({ name: nombreEvento });
    },
    createEventos: async (eventosNuevos) => {
        return await Evento.insertMany(eventosNuevos);
    },

    }

module.exports = eventoDAL