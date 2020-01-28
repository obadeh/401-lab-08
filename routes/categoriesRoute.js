'use strict';

const express = require('express');

const categories = require('../modules/categories.js');

const categoriesRouter = express.Router();

categoriesRouter.get('/categories', getCategorie);
categoriesRouter.post('/categories', postCategorie);
categoriesRouter.put('/categories/:id', updateCategorie);
categoriesRouter.delete('/categories/:id', deleteCategorie);

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

module.exports = categoriesRouter;