require('dotenv').config();
const express = require('express');
const cors = require('cors');
const loggerMiddleware = require('./src/middlewares/logger.middleware');
const userRoutes = require('./src/routes/userRoutes');
const authRoutes = require('./src/routes/authRoutes');

const app = express();

app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`SERVIDOR ENCENDIDO EN PUERTO ${PORT}`);
});
app.use(loggerMiddleware);
app.use('/usuarios', userRoutes);
app.use('/login', authRoutes);

module.exports = app;