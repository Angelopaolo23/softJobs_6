const router = require('express').Router();
const userController = require('../controllers/userController');
const validateTokenMiddleware = require('../middlewares/validateToken.middleware');

router.get('', validateTokenMiddleware, userController.oneUser );
router.post('', userController.register);

module.exports = router;
