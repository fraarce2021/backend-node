const express = require('express');
const response = require('../../network/response');
const controller = require('../user/controller');
const router = express.Router();

router.get('/', (req,res)=>{
    controller.listUsers()
    .then(users=>{
        response.success(req,res,users,200);
    })
    .catch(err => {
        response.error(req,res,'Internal error', 500, err);
    });
}), 

router.post('/', (req,res)=>{
    controller.addUser(req.body.name)
    .then((data) => {
        response.success(req,res,data,201);
    })
    .catch(e=>{
        response.error(req,res,'Internal error',500,e);
    })
});
module.exports = router;