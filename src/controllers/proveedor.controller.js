import Proveedor from '../models/proveedor.model.js'

export const getproveedores = async(req, res) => {
    const proveedores = await Proveedor.find()
    res.json(proveedores)
}

export const createproveedores = async(req, res) => {
    const { nombre, rif, direccion, telefono } = req.body

    const newProveedor = new Proveedor({
        nombre,
        rif,
        direccion,
        telefono,
        });
        const savedProveedor = await newProveedor.save();
        res.json(savedProveedor);
}

export const getproveedor = async(req, res) => {
    const proveedor = await Proveedor.findById(req.params.id)
    if (!proveedor) return res.status(404).json({ message: "Proveedor no encontrado" });
    res.json(proveedor)
}

export const updateproveedores = async(req, res) => {
    const proveedor = await Proveedor.findByIdAndUpdate(req.params.id, req.body, {
        new:true,
    })
    if (!proveedor) return res.status(404).json({ message: "Proveedor no actualizado" });
    res.json(proveedor)
}

export const deleteproveedores = async(req, res) => {
    const proveedor = await Proveedor.findByIdAndDelete(req.params.id)
    if (!proveedor) return res.status(404).json({ message: "Error al eliminar" });
    return res.sendStatus(204);
}