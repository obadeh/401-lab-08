'use strict';

const express = require('express');

const categories = require('../modules/categories.js');
const products = require('../modules/products.js');


const router = express.Router();

router.get('/categories', getCategorie);
router.post('/categories', postCategorie);
router.put('/categories/:id', updateCategorie);
router.delete('/categories/:id', deleteCategorie);

router.get('/products', getProduct);
router.post('/products', postProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);


function getCategorie(req, res, next) {
    categories.get()
    .then(data => {
      res.status(200).json(data);
    }).catch(next);
}

function postCategorie(req, res, next) {
    categories.create(req.body)
    .then(data => {
      console.log('req body:', data);
      res.status(201).json(data);
    })
}

function updateCategorie(req,res,next){
    categories.update(req.params.id,req.body)
    .then(data=>{
        res.status(201).json(data)
    })
}

function deleteCategorie(req,res,next){
    const message= 'Item is deleted';s
    categories.delete(req.params.id)
    .then(data=>{
        res.status(200).json({message})
    })
}


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

module.exports = router;