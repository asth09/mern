import { Router } from "express";
import { authRequired, validateUserRole } from "../middlewares/validateToke.js";
import { getsalidas,
    getsalida,
    createsalidas,
    updatesalidas,
    deletesalidas } from "../controllers/salida.controller.js";
import { validateSchema } from '../middlewares/validator.middle.js';
import { createSalidaSchema } from "../schemas/salida.schema.js";  

const router = Router()

router.get('/salidas', validateUserRole, getsalidas)

router.get('/salidas/:id', validateUserRole, getsalida)

router.post('/salidas', validateUserRole, validateSchema(createSalidaSchema), createsalidas)

router.delete('/salidas/:id', validateUserRole, deletesalidas)

router.put('/salidas/:id', validateUserRole, updatesalidas)


export default router