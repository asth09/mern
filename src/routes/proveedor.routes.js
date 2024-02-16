import { Router } from "express";
import { authRequired, validateUserRole } from "../middlewares/validateToke.js";
import { getproveedores,
    getproveedor,
    createproveedores,
    updateproveedores,
    deleteproveedores } from "../controllers/proveedor.controller.js";
import { validateSchema } from '../middlewares/validator.middle.js';
import { createProveedorSchema } from "../schemas/proveedor.schema.js";    

const router = Router()

router.get('/proveedor', validateUserRole, getproveedores)

router.get('/proveedor/:id', validateUserRole, getproveedor)

router.post('/proveedor', validateUserRole, validateSchema(createProveedorSchema), createproveedores)

router.delete('/proveedor/:id', validateUserRole, deleteproveedores)

router.put('/proveedor/:id', validateUserRole, updateproveedores)


export default router