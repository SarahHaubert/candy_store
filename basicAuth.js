const { types } = require('pg');
const pool = require('./db');
const queries = require('./queries')

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
    
          console.log("we did it!")
          next();
      }
        
      
     else  {
         console.log("user is not a clerk")
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
    
          console.log("we did it!")
          next();
      }
        
      
     else  {
         console.log("user is not a candy maker")
     }
}; 


module.exports = {
    clerkAuth,
    makerAuth
}; 

