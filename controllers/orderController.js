const pool = require('../db');
const queries = require('../queries'); 

const getOrders = (req, res) => {
    pool.query(queries.getOrders, (error, results) => {
        if (error) throw error; 
        res.status(200).json(results.rows);
    })
}; 

const getOrderById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getOrderById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
};

const newOrderForm = (req, res) => {
    //this would render a new order form for candy makers to use
};

const newOrder = (req, res) => {
    const { customer_id, total } = req.body;
        
        pool.query(queries.newOrder, [customer_id, total], (error, results) => {
            if(error) throw error;
            res.status(201).send("New order created successfully!")
        }); 
    
    };
    
const removeOrder = (req, res) =>  {
    const id = parseInt(req.params.id);

    pool.query(queries.getOrderById, [id], (error, results) => {
        const noOrderFound = !results.rows.length;
        if (noOrderFound) {
            res.send("Order does not exist in the database.")
        }

        pool.query(queries.removeOrder, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Order deleted successfully.");
        })
    })
}; 

module.exports = {
    getOrders,
    getOrderById,
    newOrderForm,
    newOrder, 
    removeOrder
}
