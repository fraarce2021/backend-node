const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router(); 

let app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({extended: false}));
app.use(router);

router.get('/message', (req,res)=>{
    res.send('Lista de mensajes');
});

router.post('/message', (req,res)=>{
    res.send('Mensaje añadido');
});
router.delete('/message', (req,res)=>{
    console.log(req.query);
    res.send(`Mensaje ${req.body.text} añadido correctamente`);
});

// app.use('/', (req, ress) => {
//     ress.send('Hola');
// });

app.listen(3000);
console.log('La aplicacion esta escuchando en http://localhost:3000');