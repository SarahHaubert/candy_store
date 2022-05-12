const pool = require('../db');
const queries = require('../queries')

const getUserById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getUserById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
};

const addUser = (req, res) => {
    const { name, type } = req.body;
    
        pool.query(queries.addUser, [name, type], (error, results) => {
            if(error) throw error;
            res.status(201).send("Candy created successfully!")
        }); 
    
    };



const removeUser = (req, res) =>  {
    const id = parseInt(req.params.id);

    pool.query(queries.getUserById, [id], (error, results) => {
        const noUserFound = !results.rows.length;
        if (noUserFound) {
            res.send("User does not exist in the database.")
        }

        pool.query(queries.removeUser, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send("User removed successfully.");
        })
    })
}

module.exports = {
    getUserById,
    addUser,
    removeUser,

}