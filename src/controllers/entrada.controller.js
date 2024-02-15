import Entrada from '../models/entradas.model.js'

export const getentradas = async(req, res) => {
    const entradas = await Entrada.find()
    res.json(entradas)
}

export const createentradas = async(req, res) => {
    const { nombre, entradad, observacion } = req.body

    const newEntrada = new Entrada({
        nombre,
        entradad,
        observacion,
        });
        const savedEntrada = await newEntrada.save();
        res.json(savedEntrada);
}

export const getentrada = async(req, res) => {
    const entrada = await Entrada.findById(req.params.id)
    if (!entrada) return res.status(404).json({ message: "Dato no encontrado" });
    res.json(entrada)
}

export const updateentradas = async(req, res) => {
    const entrada = await Entrada.findByIdAndUpdate(req.params.id, req.body, {
        new:true,
    })
    if (!entrada) return res.status(404).json({ message: "Dato no actualizado" });
    res.json(entrada)
}

export const deleteentradas = async(req, res) => {
    const entrada = await Entrada.findByIdAndDelete(req.params.id)
    if (!entrada) return res.status(404).json({ message: "Error al eliminar" });
    return res.sendStatus(204);
}