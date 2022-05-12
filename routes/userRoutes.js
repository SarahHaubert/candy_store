const { Router } = require('express');
const controller = require('../controllers/userController')

const router = Router();



router.post('/', controller.addUser);

router.get('/:id', controller.getUserById); 

router.delete('/:id', controller.removeUser);



module.exports = router;