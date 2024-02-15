import Producto from '../models/producto.model.js'

export const getproductos = async(req, res) => {
    const productos = await Producto.find()
    res.json(productos)
}

export const createproductos = async(req, res) => {
    const { codigo, nombre, existencia, precio } = req.body

    const newProducto = new Producto({
        codigo,
        nombre,
        existencia,
        precio,
        });
        const savedProducto = await newProducto.save();
        res.json(savedProducto);
}

export const getproducto = async(req, res) => {
    const producto = await Producto.findById(req.params.id)
    if (!producto) return res.status(404).json({ message: "Producto no encontrado" });
    res.json(producto)
}

export const updateproductos = async(req, res) => {
    const producto = await Producto.findByIdAndUpdate(req.params.id, req.body, {
        new:true,
    })
    if (!producto) return res.status(404).json({ message: "Producto no actualizado" });
    res.json(producto)
}

export const deleteproductos = async(req, res) => {
    const producto = await Producto.findByIdAndDelete(req.params.id)
    if (!producto) return res.status(404).json({ message: "Error al eliminar el producto" });
    return res.sendStatus(204);
}