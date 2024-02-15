import { Router } from "express";
import { authRequired } from "../middlewares/validateToke.js";
import { getproveedores,
    getproveedor,
    createproveedores,
    updateproveedores,
    deleteproveedores } from "../controllers/proveedor.controller.js";
import { validateSchema } from '../middlewares/validator.middle.js';
import { createProveedorSchema } from "../schemas/proveedor.schema.js";    

const router = Router()

router.get('/proveedor', authRequired, getproveedores)

router.get('/proveedor/:id', authRequired, getproveedor)

router.post('/proveedor', authRequired, validateSchema(createProveedorSchema), createproveedores)

router.delete('/proveedor/:id', authRequired, deleteproveedores)

router.put('/proveedor/:id', authRequired, updateproveedores)


export default router