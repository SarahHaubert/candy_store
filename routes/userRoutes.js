const { Router } = require('express');
const controller = require('../controllers/userController');
const { clerkAuth } = require('../basicAuth'); 

const router = Router();



router.post('/', clerkAuth, controller.addUser);

router.get('/:id', controller.getUserById); 

router.delete('/:id', controller.removeUser);

//router.post('/login', passport.authenticate('local', {failureFlash: true, failureRedirect: '/login'}), controller.login); 


  


module.exports = router;