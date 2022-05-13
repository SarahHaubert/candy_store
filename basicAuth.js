//const { types } = require('pg');
const pool = require('./db');


async function clerkAuth(req, res, next) {
    console.log(req.body)
    const id = parseInt(req.body.userId)
    
    const type = await pool.query(
        `SELECT type 
        FROM users
        WHERE id = $1`,
        [id]
      );
      
      if (type.rows[0]["type"] == "clerk") {
  
          next();
      }
        
      
     else  {
         res.status(403).send("user is not a clerk")
     }
}; 


async function makerAuth(req, res, next) {
    console.log(req.body)
    const id = parseInt(req.body.userId)
    
    const type = await pool.query(
        `SELECT type 
        FROM users
        WHERE id = $1`,
        [id]
      );
      
      if (type.rows[0]["type"] == "candy maker") {
          next();
      }
        
      
     else  {
         res.status(403).send("user is not a candy maker");
     }
}; 


module.exports = {
    clerkAuth,
    makerAuth
}; 

