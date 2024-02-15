import { z } from "zod";

export const createClienteSchema = z.object({
    nombre: z.string({
        required_error: 'El nombre es requerido',
    }),
    rif: z.number({
        required_error: 'Rif requerido',
    }).min(9, {
        message: 'El rif no puede tener mas 9 numeros'
    }),
    direccion: z.string({
        required_error: 'Direccion es requerida',
    }),
    telefono: z.number({
        required_error: 'Telefono requerido',
    }).min(11, {
        message: 'El Telefono no puede tener mas 11 numeros'
    }),
})