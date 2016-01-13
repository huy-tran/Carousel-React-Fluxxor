var ImageStore = require('./ImageStore');
var CarouselStore = require('./CarouselStore');

module.exports = {
  ImageStore: new ImageStore(),
  CarouselStore: new CarouselStore()
};