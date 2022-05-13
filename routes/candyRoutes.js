const { Router } = require('express');
const controller = require('../controllers/candyController'); 
const { makerAuth } = require('../basicAuth')

const router = Router();

router.get('/', controller.getCandy); 

router.get('/new', makerAuth, controller.newCandyForm)

router.post('/', makerAuth, controller.addCandy);

router.get('/:id', controller.getCandyById); 

router.put('/:id', controller.updateCandy);

router.delete('/:id', controller.removeCandy);



module.exports = router;