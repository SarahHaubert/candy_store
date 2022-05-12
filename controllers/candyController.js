const pool = require('../db');
const queries = require('../queries')


const getCandy = (req, res) => {
    pool.query(queries.getCandy, (error, results) => {
        if (error) throw error; 
        res.status(200).json(results.rows);
    })
}; 

const getCandyById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getCandyById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
};

const addCandy = (req, res) => {
    const { name, ingredients, cost } = req.body;
    //check if email exists
    

        pool.query(queries.addCandy, [name, ingredients, cost], (error, results) => {
            if(error) throw error;
            res.status(201).send("Candy created successfully!")
        }); 
    };
    


const removeCandy = (req, res) =>  {
    const id = parseInt(req.params.id);

    pool.query(queries.getCandyById, [id], (error, results) => {
        const noCandyFound = !results.rows.length;
        if (noCandyFound) {
            res.send("Candy does not exist in the database.")
        }

        pool.query(queries.removeCandy, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Candy removed successfully.");
        })
    })
}

const updateCandy = (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body; 

    pool.query(queries.getCandyById, [id], (error, results) => {
        const noCandyFound = !results.rows.length;
        if (noCandyFound) {
            res.send("Candy does not exist in the database.")
        }

        pool.query(queries.updateCandy, [name, id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Candy updated successfully.");
        })
    })

}

module.exports = {
    getCandy,
    getCandyById,
    addCandy,
    removeCandy,
    updateCandy,
}