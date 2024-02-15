import { z } from "zod";

export const createSalidaSchema = z.object({
    nombre: z.string({
        required_error: 'El nombre es requerido',
    }),
    salidad: z.number({
        required_error: 'Dato requerido',
    }),
    observacion: z.string({
        required_error: 'Observacion es requerida',
    }),
})