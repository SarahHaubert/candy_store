const express = require('express');
const candyRoutes = require('./routes/candyRoutes')

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello world')
});

app.use('/api/candy', candyRoutes)


app.listen(3000, () => console.log('listening on 3000'))