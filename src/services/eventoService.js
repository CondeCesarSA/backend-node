const eventoDAL = require('../repositories/eventoDAL')

const eventoService = {
    getEventos: async () => {

        const eventos = await eventoDAL.getEventos()

        if (eventos && eventos.length > 0) {
            return eventos
        } else {
            throw new Error("No hay eventos")
        }
    },
    getOneEvento: async (name) => {
        const evento = await eventoDAL.getOneEvento(name);
        if (evento) {
            return evento;
        } else {
            return null;
        }
    },
    createEvento: async (eventoNuevo) => {
        const evento = await eventoDAL.createEvento(eventoNuevo);
        if (evento) {
            return evento;
        } else {
            return null;
        }

    },
    updateEvento: async (idEventoActualizar, datosActualizados) => {
        const evento = await eventoDAL.updateEvento(idEventoActualizar, datosActualizados);
        return evento || null;
    },
    deleteEvento: async (nombreEvento) => {
        const resultado = await eventoDAL.deleteEvento(nombreEvento);
        return resultado;
    },
    createEventos: async (eventosNuevos) => {
        const eventos = await eventoDAL.createEventos(eventosNuevos);
        if(eventos){
            return eventos
        }else{
            return null
        }
    },


    }


module.exports = eventoService