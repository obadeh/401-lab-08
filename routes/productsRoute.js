'use strict';

const express = require('express');

const products = require('../modules/products.js');
const productsRoute = express.Router();


productsRoute.get('/products', getProduct);
productsRoute.post('/products', postProduct);
productsRoute.put('/products/:id', updateProduct);
productsRoute.delete('/products/:id', deleteProduct);


function getProduct(req, res, next) {
    products.get()
    .then(data => {
      res.status(200).json(data);
    }).catch(next);
}

function postProduct(req, res, next) {
    products.create(req.body)
    .then(data => {
      console.log('req body:', data);
      res.status(201).json(data);
    })
}

function updateProduct(req,res,next){
    products.update(req.params.id,req.body)
    .then(data=>{
        res.status(201).json(data)
    })
    
}

function deleteProduct(req,res,next){
    const message= 'Item is deleted';
    console.log('req.params.id : ', req.params.id);
    products.delete(req.params.id)
    .then(data=>{
        res.status(200).json({message})
    }).catch((err)=>console.error("asdsadsadsadsad",err));
}

module.exports = productsRoute;