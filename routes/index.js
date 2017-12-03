const express = require('express');

const router = express.Router();
const { IndexPage, ajaxProductsIndex } = require('../data/patterns');

console.log(IndexPage);

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', IndexPage);
});

router.get('/index-products', (req, res) => {
  res.json(ajaxProductsIndex);
});

module.exports = router;
