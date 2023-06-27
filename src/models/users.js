const pool = require('../config/db');

const createUser = async (email, password, rol, lenguage) => {
    try {
        const query ="INSERT INTO usuarios (email, password, rol, lenguage) VALUES ($1, $2, $3, $4) RETURNING *";
        const values = [email, password, rol, lenguage]
        const response = await pool.query(query, values);
        return response.rows;
    } catch (error) {
        throw new Error(error);
    }
};

const getUserByEmail = async (email) => {
    const query = "SELECT * FROM usuarios WHERE email = $1";
    try {
        const response = await pool.query(query, [email]);
        return response.rows[0];
    } catch (error) {
        throw new Error(error);
    }
};

module.exports = {
    createUser,
    getUserByEmail,
};
