const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { getUserByEmail } = require('../models/users');

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await getUserByEmail(email);
        
        if (!user) {
            throw new Error('Usuario no encontrado');
        }
        const hashedPassword = user.password;
        const match = await bcrypt.compare(password, hashedPassword);

        if (match) {
        const token = jwt.sign(
            { email: user.email, id: user.id },
            process.env.JWT_SECRET
        );
        res
            .status(200)
            .json(token);
        } else {
            throw new Error('Usuario o contraseña incorrectas');
        }
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
};


module.exports = { login };
