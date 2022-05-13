const express = require('express');
const candyRoutes = require('./routes/candyRoutes'); 
const userRoutes = require('./routes/userRoutes'); 
const cors = require('cors');

const app = express();

//app.use(cors());
app.use(express.json());
//app.use(function(req, res, next) {
//  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//  res.header("Access-Control-Allow-Credentials",true);
//  next();
//});


app.get('/', (req, res) => {
    
    //res.send('hello world')
    console.log("made it to the end")
});

app.use('/api/candy', candyRoutes);
app.use('/api/user', userRoutes);




app.listen(3000, () => console.log('listening on 3000'))