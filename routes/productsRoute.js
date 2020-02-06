

const express = require('express');

const products = require('../modules/products.js');
const productsRoute = express.Router();

productsRoute.get('/products', getProducts);
productsRoute.get('/products/:id', getProduct);
productsRoute.post('/products', postProduct);
productsRoute.put('/products/:id', updateProduct);
productsRoute.delete('/products/:id', deleteProduct);


function getProducts(req, res, next) {
  products.get()
    .then(data => {
      const output = {
        count: data.length,
        results: data,
      };
      res.status(200).json(output);
    }).catch(next);
}

function getProduct(req, res, next) {
  // expects an array with the one matching record from the model
  products.get(req.params.id)
    .then(result => res.status(200).json(result[0]))
    .catch(next);
}

function postProduct(req, res, next) {
  products.create(req.body)
    .then(data => {
      console.log('req body:', data);
      res.status(201).json(data);
    });
}

function updateProduct(req,res,next){
  products.update(req.params.id,req.body)
    .then(data=>{
      res.status(201).json(data);
    });

}

function deleteProduct(req,res,next){
  const message = 'Item is deleted';
  console.log('req.params.id : ', req.params.id);
  products.delete(req.params.id)
    .then(data=>{
      res.status(200).json({message});
    }).catch((err)=>console.error('asdsadsadsadsad',err));
}

module.exports = productsRoute;