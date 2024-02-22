import Cliente from '../models/clientes.model.js'

export const getclientes = async(req, res) => {
    const clientes = await Cliente.find()
    res.json(clientes)
}

export const createclientes = async(req, res) => {
    const { nombre, rif, direccion, telefono } = req.body

    console.log(req.user)

    const newCliente = new Cliente({
        nombre,
        rif,
        direccion,
        telefono,
        //vendedor: req.user.id
        });
        const savedCliente = await newCliente.save();
        res.json(savedCliente);
}

export const getcliente = async(req, res) => {
    const cliente = await Cliente.findById(req.params.id)
    if (!cliente) return res.status(404).json({ message: "Cliente no encontrado" });
    res.json(cliente)
}

export const getClientes = async (req, res) => {
    /* obtengo y valido 'pagina' de la query */
    const { pagina } = req.query;
    if (!pagina) return res.status(400).json({ message: "Parametro 'pagina' es requerido en la query" });

    /* 
        buscar clientes en la db
        .skip() busca los documentos desde el numero que se indica en el parentesis
        .limit() cantidad de documentos que busca
    */
    const clientes = await Cliente.find()
    .skip(pagina * 20)
    .limit(20)

    if (!clientes) return res.status(500).json({ message: "Error al obtener los clientes" })

    res.json({clientes})
}

export const updateclientes = async(req, res) => {
    const cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, {
        new:true,
    })
    if (!cliente) return res.status(404).json({ message: "Cliente no actualizado" });
    res.json(cliente)
}

export const deleteclientes = async(req, res) => {
    const cliente = await Cliente.findByIdAndDelete(req.params.id)
    if (!cliente) return res.status(404).json({ message: "Cliente no eliminado" });
    return res.sendStatus(204);
}