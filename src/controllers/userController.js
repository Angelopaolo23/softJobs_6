const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { getUserByEmail, createUser } = require('../models/users');

const oneUser = async (req, res) => {
    try {
        const Authorization = req.header("Authorization");
        const token = Authorization.split("Bearer ")[1];
        const { email: user_email } = jwt.verify(token, process.env.JWT_SECRET);
        const loguedUserData = await getUserByEmail(user_email);
        res.json(loguedUserData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const register = async (req, res) => {
    try {
        const originalPassword = req.body.password;
        const hashedPassword = await bcrypt.hash(originalPassword, 10);
        req.body.password = hashedPassword;
        const {email, password, rol, lenguage} = req.body;
        const user = await createUser(email, password, rol, lenguage);
        if (!user) {
        throw new Error('No se pudo crear el usuario');
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}; 

module.exports = {oneUser, register};