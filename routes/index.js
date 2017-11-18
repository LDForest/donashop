const express = require('express');

const router = express.Router();
const data = require('../data/patterns').IndexPage;

/* GET home page. */
console.log(data);
router.get('/', (req, res) => {
  res.render('index', data);
});

module.exports = router;
