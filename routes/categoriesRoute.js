

const express = require('express');

const categories = require('../modules/categories.js');

const categoriesRouter = express.Router();

categoriesRouter.get('/categories', getCategories);
categoriesRouter.get('/categories/:id', getCategory);
categoriesRouter.post('/categories', postCategorie);
categoriesRouter.put('/categories/:id', updateCategorie);
categoriesRouter.delete('/categories/:id', deleteCategorie);

function getCategories(req, res, next) {
  categories.get()
    .then(data => {
      const output = {
        count: data.length,
        results: data,
      };
      res.status(200).json(output);
    }).catch(next);
}

function getCategory(req, res, next) {
  // expects an array with the one matching record from the model
  categories.get(req.params.id)
    .then(result => res.status(200).json(result[0]))
    .catch(next);
}

function postCategorie(req, res, next) {
  categories.create(req.body)
    .then(data => {
      console.log('req body:', data);
      res.status(201).json(data);
    });
}

function updateCategorie(req, res, next) {
  categories.update(req.params.id, req.body)
    .then(data => {
      res.status(201).json(data);
    });
}

function deleteCategorie(req, res, next) {
  const message = 'Item is deleted';
  categories.delete(req.params.id)
    .then(data => {
      res.status(200).json({ message });
    });
}

module.exports = categoriesRouter;