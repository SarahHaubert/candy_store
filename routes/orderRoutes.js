const { Router } = require('express');
const controller = require('../controllers/orderController');
const { clerkAuth } = require('../basicAuth'); 

const router = Router();

router.get('/', controller.getOrders); 

router.get('/new', clerkAuth, controller.newOrderForm)

router.post('/', clerkAuth, controller.newOrder);

router.get('/:id', controller.getOrderById); 

router.delete('/:id', clerkAuth, controller.removeOrder);



module.exports = router;