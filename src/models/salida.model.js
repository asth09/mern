import mongoose from "mongoose";

const salidaShema = new mongoose.Schema({
    nombre: { 
        type: String,
        required:true,
    },
    salidad: { 
        type: Number,
        required:true,
    },
    observacion: { 
        type: String,
        required:true,
    },
    vendedor: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
    },
}, {timestamps: true,
    versionKey:false});

export default mongoose.model("Salida", salidaShema);