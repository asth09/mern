import { Router } from "express";
import { authRequired, validateUserRole } from "../middlewares/validateToke.js";
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

router.post('/clientes', validateUserRole, validateSchema(createClienteSchema), createclientes)

router.delete('/clientes/:id', validateUserRole, deleteclientes)

router.put('/clientes/:id', validateUserRole, updateclientes)


export default router