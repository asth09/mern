import mongoose from "mongoose";
import { string } from "zod";

const productoShema = new mongoose.Schema({
    codigo: { 
        type: String,
        required:true,
    },
    nombre: { 
        type: String,
        required:true,
    },
    existencia: { 
        type: Number,
        required:true,
    },
    precio: { 
        type: Number,
        required:true,
    },
}, {versionKey:false});

export default mongoose.model("Producto", productoShema);