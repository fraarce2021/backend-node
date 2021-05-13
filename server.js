const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db');

const router = require('./network/routes');

db('mongodb+srv://user:user1234@telegram.bqfbb.mongodb.net/MyDatabase?retryWrites=true&w=majority');

let app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({extended: false}));
// app.use(router);

router(app);

app.use('/app', express.static('public'));

app.listen(3000);
console.log('La aplicacion esta escuchando en http://localhost:3000');