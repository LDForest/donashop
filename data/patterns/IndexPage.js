const data = require('../');

const pattern = {
  indexSlider: [].concat(data.iNeed('indexSlides', 'stretchRecursive', 4, 0)),
  mainProducts: [].concat(
    data.iNeed('products', 'stretch', 4, 0),
    data.iNeed('newProducts', 'stretch', 1),
    data.iNeed('products', 'stretchRecursive', 3, 5),
  ),
  eventSlider: [].concat(data.iNeed('indexEventsSlides', 'stretchRecursive', 4, 0)),
  hotProducts: [].concat(data.iNeed('hotProducts', 'stretch', 2, 0)),
  ad: [].concat(data.iNeed('indexAds', 1)),
  populars: [
    data.iNeed('news', 'stretch', 3, 0),
    data.iNeed('news', 'stretch', 3, 0),
    data.iNeed('news', 'stretch', 3, 0),
  ],
};

module.exports = pattern;
