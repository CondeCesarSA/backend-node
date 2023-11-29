const eventoService = require('../services/eventoService')

const eventoController = {
    async getEventos(req, res) {
        try {
            const eventos = await eventoService.getEventos()
            if(eventos.length > 0){
                res.json(eventos)
            }else{
                res.status(404).json({
                    message: "Eventos not found"
                })
            }
        } catch (error) {
            res.status(500).json({ message: "Error geting eventos " + error.message })
        }

    },
    async getOneEventoByName(req, res) {
        const nombreDelEvento = req.params.name;
        try {
            const evento = await eventoService.getOneEvento(nombreDelEvento);

            if (evento) {
                res.json(evento);
            } else {
                res.status(404).json({ message: "El evento no fue encontrado" });
            }

        } catch (error) {
            res.status(500).json({ message: "Error: " + error.message });
        }
    },
    async createEvento(req, res) {
        try {
            const eventoNuevo = req.body;
            const evento = await eventoService.createEvento(eventoNuevo);
    
            if (evento) {
                res.json({ message: "Evento creado", evento: evento });
            } else {
                res.status(404).json({ message: "El evento no fue creado" });
            }
        } catch (error) {
            res.status(500).json({ message: "Error: " + error.message });
        }
    },
    async updateEventoByID(req, res) {
        const idEventoActualizar = req.params.id;
        try {
            const evento = await eventoService.updateEvento(idEventoActualizar, req.body);
            if (evento) {
                res.json(evento);
            } else {
                res.status(404).json({ message: "El evento no fue creado" });
            }

        } catch (error) {
            res.status(500).json({ message: "Error: " + error.message });
        }
    },
    async deleteEventoByName(req, res) {
        const borrarEvento = req.params.name;

        try {
            const resultado = await eventoService.deleteEvento(borrarEvento);

            if (resultado) {
                res.status(200).json({ success: true, message: "Evento Borrado" });
            } else {
                res.status(404).json({ success: false, message: "El evento no fue encontrado" });
            }

        } catch (error) {
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },
    async createEventos(req, res) {
        const traerEventos = req.body.eventos;
    
        try {
            const eventos = await eventoService.createEventos(traerEventos);
            res.json({ success: true, eventos: eventos });
    
        } catch (error) {
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },
}

module.exports = eventoController