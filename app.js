const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(express.json());
app.use(cors());

const PORT = 5000 | process.env.PORT;

const MONGOOSE_URI = "mongodb+srv://cmpe172:cmpe172@mockunidb.t7ssh.mongodb.net/<dbname>?retryWrites=true&w=majority"
mongoose.connect( MONGOOSE_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false});
mongoose.connection.on('connected', () => {
    console.log('Successfully connected to MongoDB')
});
mongoose.connection.on('error', console.error.bind(console, 'Connection error: '));

app.get('/', (req, res) => {
    res.send('You made it to the API');    
})

app.listen(PORT, (req, res) => {
    console.log(`API started on port: ${PORT}`);
});