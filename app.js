const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(express.json());
app.use(cors());

const PORT = 5000 | process.env.PORT;

app.get('/', (req, res) => {
    res.send('You made it to the API');    
})

app.listen(PORT, (req, res) => {
    console.log(`API started on port: ${PORT}`);
});