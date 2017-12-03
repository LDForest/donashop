const express = require('express');

const router = express.Router();
const data = require('../data/patterns').IndexPage;

console.log(data);

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', data);
});

module.exports = router;
