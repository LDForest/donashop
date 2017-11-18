const data = require('../');

const pattern = {
  indexSlider: [].concat(data.indexSlides.iNeed('stretchRecursive', 4, 0)),
  mainProducts: [].concat(
    data.products.iNeed('stretch', 4, 0),
    data.newProducts.iNeed('stretch', 1),
    data.products.iNeed('stretchRecursive', 3, 5),
  ),
  eventSlider: [].concat(data.indexEventsSlides.iNeed('stretchRecursive', 4, 0)),
  hotProducts: [].concat(data.hotProducts.iNeed('stretch', 2, 0)),
  ad: [].concat(data.indexAds.iNeed('stretch', 1, 0)),
  populars: [
    data.news.iNeed('stretch', 3, 0),
    data.news.iNeed('stretch', 3, 0),
    data.news.iNeed('stretch', 3, 0),
  ],
};

module.exports = pattern;
