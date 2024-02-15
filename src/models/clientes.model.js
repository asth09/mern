import mongoose from "mongoose";

const clienteShema = new mongoose.Schema({
    nombre: { 
        type: String,
        required:true,
    },
    rif: { 
        type: Number,
        required:true,
    },
    direccion: { 
        type: String,
        required:true,
    },
    telefono: { 
        type: Number,
        required:true,
    },
    vendedor: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        
        
    },
}, {versionKey:false});

export default mongoose.model("Cliente", clienteShema);