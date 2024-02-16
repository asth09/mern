import { Router } from "express";
import { authRequired, validateUserRole } from "../middlewares/validateToke.js";
import { getentradas,
    getentrada,
    createentradas,
    updateentradas,
    deleteentradas } from "../controllers/entrada.controller.js";
import { validateSchema } from '../middlewares/validator.middle.js';
import { createEntradaSchema } from "../schemas/entrada.schema.js";    

const router = Router()

router.get('/entradas', validateUserRole, getentradas)

router.get('/entradas/:id', validateUserRole, getentrada)

router.post('/entradas', validateUserRole, validateSchema(createEntradaSchema), createentradas)

router.delete('/entradas/:id', validateUserRole, deleteentradas)

router.put('/entradas/:id', validateUserRole, updateentradas)


export default router