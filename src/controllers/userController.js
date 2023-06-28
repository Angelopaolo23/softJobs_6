const bcrypt = require('bcrypt');
const { getUserByEmail, createUser } = require('../models/users');

const oneUser = async (req, res) => {
    try {
        const loguedUserData = await getUserByEmail(req.user_email);
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