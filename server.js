const express = require('express')
const mongoose = require('mongoose')
const app = express();
const morgan = require('morgan');

mongoose.connect('mongodb://localhost:27017/dockerusers', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('connected to MongoDB');
});

app.listen(4000, () => console.log('Server running on port 4000'));