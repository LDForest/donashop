const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', IndexPage);
});

router.get('/index-products', (req, res) => {
  setTimeout(() => res.json(ajaxProductsIndex), 1000);
});

module.exports = router;
