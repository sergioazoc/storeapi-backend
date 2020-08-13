const express = require('express');
const router = express.Router();

const pool = require('../database.js');

router.get('/', (req, res) => {
  pool.query('SELECT * FROM product', (error, result) => {
      if (error) throw error;

      res.send(result);
  });
});

module.exports = router;