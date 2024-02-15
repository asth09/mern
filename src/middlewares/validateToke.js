import jwt from "jsonwebtoken"; 
import { JWT_SECRET } from "../config.js"; 
 
export const authRequired = (req, res, next) => { 
    try {
        const { token } = req.cookies; 

        if (!token) {
            return res.status(401).json({ message: "No hay token, autorización denegada" }); 
        }

        jwt.verify(token, JWT_SECRET, (error, user) => { 
            if (error) {
                return res.status(403).json({ message: "Token inválido" }); 
            }
            // Establecer la cookie en la respuesta
            //res.cookie('token', token);
            req.user = user;
            console.log(user);
            next(); 
        });
    } catch (error) {
        console.error("Error al verificar el token:", error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
};
