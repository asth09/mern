import { z } from "zod";

export const createEntradaSchema = z.object({
    nombre: z.string({
        required_error: 'El nombre es requerido',
    }),
    entradad: z.number({
        required_error: 'Entrada requerido',
    }),
    observacion: z.string({
        required_error: 'Observacion es requerida',
    }),
})