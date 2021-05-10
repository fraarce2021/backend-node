const express = require('express');
const router = express.Router(); 

let app = express();

app.use(router);

router.get('/', (req,res)=>{
    res.send('Hola desde ger');
});

// app.use('/', (req, ress) => {
//     ress.send('Hola');
// });

app.listen(3000);
console.log('La aplicacion esta escuchando en http://localhost:3000');