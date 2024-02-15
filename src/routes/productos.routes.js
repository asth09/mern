import { Router } from "express";
import { authRequired } from "../middlewares/validateToke.js";
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

router.post('/productos', authRequired, validateSchema(createProductoSchema), createproductos)

router.delete('/productos/:id', authRequired, deleteproductos)

router.put('/productos/:id', authRequired, updateproductos)


export default router