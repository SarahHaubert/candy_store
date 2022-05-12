const express = require('express');
const candyRoutes = require('./routes/candyRoutes'); 
const userRoutes = require('./routes/userRoutes'); 

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello world')
});

app.use('/api/candy', candyRoutes);
app.use('/api/user', userRoutes);


app.listen(3000, () => console.log('listening on 3000'))