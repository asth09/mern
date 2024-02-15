import { Router } from "express";
import { authRequired } from "../middlewares/validateToke.js";
import { getsalidas,
    getsalida,
    createsalidas,
    updatesalidas,
    deletesalidas } from "../controllers/salida.controller.js";
import { validateSchema } from '../middlewares/validator.middle.js';
import { createSalidaSchema } from "../schemas/salida.schema.js";  

const router = Router()

router.get('/salidas', authRequired, getsalidas)

router.get('/salidas/:id', authRequired, getsalida)

router.post('/salidas', authRequired, validateSchema(createSalidaSchema), createsalidas)

router.delete('/salidas/:id', authRequired, deletesalidas)

router.put('/salidas/:id', authRequired, updatesalidas)


export default router