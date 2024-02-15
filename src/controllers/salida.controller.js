import Salida from '../models/salida.model.js'

export const getsalidas = async(req, res) => {
    const salidas = await Salida.find()
    res.json(salidas)
}

export const createsalidas = async(req, res) => {
    const { nombre, salidad, observacion } = req.body

    const newSalida = new Salida({
        nombre,
        salidad,
        observacion,
        });
        const savedSalida = await newSalida.save();
        res.json(savedSalida);
}

export const getsalida = async(req, res) => {
    const salida = await Salida.findById(req.params.id)
    if (!salida) return res.status(404).json({ message: "Dato no encontrado" });
    res.json(salida)
}

export const updatesalidas = async(req, res) => {
    const salida = await Salida.findByIdAndUpdate(req.params.id, req.body, {
        new:true,
    })
    if (!salida) return res.status(404).json({ message: "Dato no actualizado" });
    res.json(salida)
}

export const deletesalidas = async(req, res) => {
    const salida = await Salida.findByIdAndDelete(req.params.id)
    if (!salida) return res.status(404).json({ message: "Error al eliminar" });
    return res.sendStatus(204);
}