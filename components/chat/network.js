const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.post('/', (req,res)=>{
    controller.addChat(req.body.user)
    .then((data)=>{
        response.success(req,res,data,201);
    })
    .catch(e => {
        response.error(req,res,'Internal Error',500, 'Error en el controlador'+e);
    })
});
 
router.get('/:userId', (req,res)=>{
    console.log('1');
    controller.listChats(req.params.userId)
    .then((users)=>{
        console.log('5');
        response.success(req,res,users,200)
    })
    .catch(e=>{
        response.error(req,res,"Internal Error", 500, e)
    })
});

module.exports = router;