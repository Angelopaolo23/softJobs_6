const router = require('express').Router();
const authController = require('../controllers/authController');
const validateEmailAndPasswordMiddleware = require('../middlewares/isEmailAndPassword.middleware');

router.post('', validateEmailAndPasswordMiddleware, authController.login);

module.exports = router;