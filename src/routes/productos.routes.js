import { Router } from "express";
import { authRequired, validateUserRole } from "../middlewares/validateToke.js";
import { getproductos,
    getproducto,
    createproductos,
    updateproductos,
    deleteproductos } from "../controllers/producto.controller.js";
import { validateSchema } from '../middlewares/validator.middle.js';
import { createProductoSchema } from "../schemas/producto.schema.js";    

const router = Router()

router.get('/productos', authRequired, getproductos)

router.get('/productos/:id', authRequired, getproducto)

router.post('/productos', validateUserRole, validateSchema(createProductoSchema), createproductos)

router.delete('/productos/:id', validateUserRole, deleteproductos)

router.put('/productos/:id', validateUserRole, updateproductos)


export default router