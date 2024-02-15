import { z } from "zod";

export const createProductoSchema = z.object({
    codigo: z.string({
        required_error: 'El codigo es requerido',
    }),
    nombre: z.string({
        required_error: 'El nombre es requerido',
    }),
    existencia: z.number({
        required_error: 'La existencia es requerida',
    }),
    precio: z.number({
        required_error: 'Precio requerido',
    })
})