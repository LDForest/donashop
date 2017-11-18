const mock = require('./mock');
const Giver = require('./Giver');

const hotProducts = new Giver(mock.hotProducts);
const products = new Giver(mock.products);
const newProducts = new Giver(mock.newProducts);
const indexEventsSlides = new Giver(mock.indexEventsSlides);
const indexAds = new Giver(mock.indexAds);
const news = new Giver(mock.news);
const indexSlides = new Giver(mock.indexSlides);

module.exports = {
  products,
  newProducts,
  indexEventsSlides,
  indexAds,
  hotProducts,
  news,
  indexSlides,
};
