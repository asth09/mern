import mongoose from "mongoose";

const ventaSchema = new Schema({
    /* fecha de la venta */
    fecha: {
        type: Date,
        default: Date.now(),
        required: [true, 'Espcifique la fecha'],
    },
    /* cliente referenciado de la venta */
    cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cliente',
        required: [true, 'Especifique el cliente'],
    },
    /* 
        productos de la venta 

        producto: contiene un producto referenciado
        cantidad: contiene la cantidad de dicho producto
    */
    productos: [
        {
            producto: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Producto',
                required: [true, 'Debe haber al menos un producto']
            },
            cantidad: {
                type: Number,
                required: [true, 'Especifique la cantidad de productos']
            }
        }
    ],
    /*
        pago de la venta

        cantidad: contiene la cantidad de pagos en que se divide la venta
        metodo: contiene el metodo de pago de la venta
    */
    pago: {
        cantidad: {
            type: Number,
            /* 
                enum sirve para que el valor solo pueda ser uno que se encuentre dentro del array.
                Si se indica otro, arrojará un error
            */
            enum: [1, 2, 3, 4, 5, 6, 12],
            default: 1,
            required: [true, 'Especifique la cantidad de pagos']
        },
        metodo: {
            type: String,
            enum: ['EFECTIVO', 'PAGO_MOVIL', 'TRANSFERENCIA', 'DIVISAS'],
            default: 'EFECTIVO',
            required: [true, 'Escpecifique el metodo de pago']
        }
    }
})

export default mongoose.Model('Venta', ventaSchema)