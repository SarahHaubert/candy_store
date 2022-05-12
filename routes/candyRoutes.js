const { Router } = require('express');
const controller = require('../controllers/candyController')

const router = Router();

router.get('/', controller.getCandy); 

router.post('/', controller.addCandy);

router.get('/:id', controller.getCandyById); 

router.put('/:id', controller.updateCandy);

router.delete('/:id', controller.removeCandy);



module.exports = router;