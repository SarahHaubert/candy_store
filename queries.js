
const getCandy = "SELECT * FROM candy"; 
const getCandyById = "SELECT * FROM candy WHERE id = $1"; 
const checkNameExists = "SELECT * FROM candy WHERE name = $1";
const addCandy = "INSERT INTO candy (name, ingredients, cost) VALUES ($1, $2, $3)"; 
const removeCandy = "DELETE FROM candy WHERE id = $1";
const updateCandy = "UPDATE candy SET name = $1 WHERE id = $2";

const getUserById = "SELECT * FROM users WHERE id = $1"; 
const addUser = "INSERT INTO users (name, type) VALUES ($1, $2)"; 
const removeUser = "DELETE FROM users WHERE id = $1";

module.exports = {
    getCandy,
    getCandyById,
    addCandy,
    removeCandy,
    updateCandy,
    getUserById,
    addUser,
    removeUser,

};