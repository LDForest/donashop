const data = require('../');

const pattern = {
  indexSlider: [...data.iNeed('indexSlides', 'stretchRecursive', 5, 0)],
  mainProducts: [
    ...data.iNeed('products', 'stretch', 4, 0),
    ...data.iNeed('newProducts', 'stretch', 1),
    ...data.iNeed('products', 'stretchRecursive', 5, 5),
  ],
  eventSlider: [...data.iNeed('indexEventsSlides', 'stretchRecursive', 4, 0)],
  hotProducts: [...data.iNeed('hotProducts', 'stretch', 2, 0)],
  ad: [...data.iNeed('indexAds', 1)],
  populars: [
    data.iNeed('news', 'stretch', 3, 0),
    data.iNeed('news', 'stretch', 3, 0),
    data.iNeed('news', 'stretch', 3, 0),
  ],
};

module.exports = pattern;
