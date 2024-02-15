import { Router } from "express";
import { authRequired } from "../middlewares/validateToke.js";
import { getentradas,
    getentrada,
    createentradas,
    updateentradas,
    deleteentradas } from "../controllers/entrada.controller.js";
import { validateSchema } from '../middlewares/validator.middle.js';
import { createEntradaSchema } from "../schemas/entrada.schema.js";    

const router = Router()

router.get('/entradas', authRequired, getentradas)

router.get('/entradas/:id', authRequired, getentrada)

router.post('/entradas', authRequired, validateSchema(createEntradaSchema), createentradas)

router.delete('/entradas/:id', authRequired, deleteentradas)

router.put('/entradas/:id', authRequired, updateentradas)


export default router