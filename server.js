const express = require('express')
const mongoose = require('mongoose')
const app = express();
const morgan = require('morgan');

mongoose.connect('mongodb://localhost:27017/dockerusers', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('connected to MongoDB');
});

app.use(morgan('dev'));
var users= require('./routes/user');
app.use('/v1/users',users);

var erroMessages= require('./controllers/errorController');
app.use(erroMessages);

app.listen(3000, () => console.log('Server running on port 3000'));