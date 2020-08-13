const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database.js');

// GET all products
router.get('/', (req, res) => {
  mysqlConnection.query('SELECT * FROM product', (err, rows) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

// GET product by id
router.get('/:id', (req, res) => {
  const { id } = req.params; 
  mysqlConnection.query('SELECT * FROM product WHERE id = ?', [id], (err, rows) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      res.json(err);
      console.log(err);
    }
  });
});


module.exports = router;
