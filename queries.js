
const getCandy = "SELECT * FROM candy"; 
const getCandyById = "SELECT * FROM candy WHERE id = $1"; 

const addCandy = "INSERT INTO candy (name, email, age, dob) VALUES ($1, $2, $3, $4)"; 
const removeCandy = "DELETE FROM candy WHERE id = $1";
const updateCandy = "UPDATE candy SET name = $1 WHERE id = $2";

module.exports = {
    getCandy,
    getCandyById,
    
    addCandy,
    removeCandy,
    updateCandy,

};