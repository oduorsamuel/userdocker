const express = require('express')
const mongoose = require('mongoose')
const app = express();
const morgan = require('morgan');

mongoose
  .connect(
    'mongodb://mongo:27017/docker-users',
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.use(morgan('dev'));
var users= require('./routes/user');
app.use('/v1/users',users);

var erroMessages= require('./controllers/errorController');
app.use(erroMessages);

app.listen(3000, () => console.log('Server running on port 3000'));