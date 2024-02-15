import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import { createAccessToken } from '../libs/jwt.js'

export const register = async (req, res) => {
    const {usuario, password, role} = req.body

    try {
        const passwordHash = await bcrypt.hash(password, 10)
        const newUser = new User({
            usuario,
            password: passwordHash,
            role,
        })
        
        const userSaved = await newUser.save()
        const token = await createAccessToken({id: userSaved._id, role: userSaved.role})
        res.cookie('token', token)
            res.json({
                message:"User created successfully",
            })
        //res.send('registrando')
    } catch (error) {
        console.log(error)
    }
};

export const login = async (req, res) => {
    const { usuario, password } = req.body

    try {
        const userFound = await User.findOne({usuario})
        if (!userFound) return res.status(400).json({message:"Usuario no existe"})

        const isMatch = await bcrypt.compare(password, userFound.password)
        if (!isMatch) return res.status(400).json({ message:"Contraseña incorrecta" })

        const token = await createAccessToken({ id: userFound._id, role: userFound.role })
        res.cookie('token', token)
            res.json({
                message:"Bienvenido",
            })
        //res.send('registrando')
    } catch (error) {
        console.log(error)
    }
};

export const logout = (req, res) => {
    res.cookie('token', "", {
        expires: new Date(0)
    });
    return res.sendStatus(200);
}

export const profile = (req, res) => {
    const userFound = User.findById(req.user.id)
    if (!userFound) return res.status(400).json({ message: "User not found"});

    return res.json({
        id: userFound._id,
        usuario: userFound.usuario
    })
    res.send('profile')
}
