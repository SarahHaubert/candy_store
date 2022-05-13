const { Router } = require('express');
const controller = require('../controllers/userController');
const { clerkAuth } = require('../basicAuth'); 

const router = Router();


router.get('/new', clerkAuth, controller.newUserForm);

router.post('/', clerkAuth, controller.addUser);

router.get('/:id', controller.getUserById); 

router.delete('/:id', clerkAuth, controller.removeUser);

module.exports = router;