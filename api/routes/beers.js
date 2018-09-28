var express = require('express');
var router = express.Router();
var Retrieve= require('../models/Retrieve');
var Send= require('../models/Send');

router.get('/brewery/:id', function(req, res, next) {
    Retrieve.getBeersByBreweryId(req.params.id, function(err, rows){
      if (err) {
        res.json(err);
      }
      else {
        res.json(rows);
      }
    });
});

router.get('/:id?', function(req, res, next) {
  if (req.params.id) {
    Retrieve.getBeerById(req.params.id, function(err, rows){
      if (err) {
        res.json(err);
      }
      else {
        res.json(rows);
      }
    });
  }
  else {
    Retrieve.getAllBeers(function(err, rows){
      if (err) {
        res.json(err);
      }
      else {
        res.json(rows);
      }
    });
  }
});

router.post('/', function(req, res, next) {
  Send.addBeer(req.body, function(err, rows){
    if (err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }
  });
});

router.delete('/', function(req, res, next) {
  Send.deleteBeer(req.query, function(err, rows){
    if (err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }
  });
});

module.exports = router;