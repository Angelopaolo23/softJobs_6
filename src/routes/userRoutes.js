const router = require('express').Router();
const userController = require('../controllers/userController');

router.get('', userController.oneUser );
router.post('', userController.register);

module.exports = router;
