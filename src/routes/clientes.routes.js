import { Router } from "express";
import { authRequired } from "../middlewares/validateToke.js";
import { getclientes,
    getcliente,
    createclientes,
    updateclientes,
    deleteclientes } from "../controllers/cliente.controller.js";
import { validateSchema } from '../middlewares/validator.middle.js';
import { createClienteSchema } from "../schemas/cliente.schema.js";    

const router = Router()

router.get('/clientes', authRequired, getclientes)

router.get('/clientes/:id', authRequired, getcliente)

router.post('/clientes', authRequired, validateSchema(createClienteSchema), createclientes)

router.delete('/clientes/:id', authRequired, deleteclientes)

router.put('/clientes/:id', authRequired, updateclientes)


export default router