var Fluxxor = require('fluxxor');
var AppConstants = require('../constants/AppConstants');
var ADD_IMAGE = AppConstants.ADD_IMAGE,
    NEXT_IMAGE = AppConstants.NEXT_IMAGE,
    PREV_IMAGE = AppConstants.PREV_IMAGE,
    SELECT_IMAGE = AppConstants.SELECT_IMAGE;

var CarouselStore = Fluxxor.createStore({
  initialize: function(){
    this.current = 0;
    this.count = 0;
    this.bindActions({
      ADD_IMAGE: 'handleAddImage',
      NEXT_IMAGE: 'handleNextImage',
      PREV_IMAGE: 'handlePrevImage',
      SELECT_IMAGE: 'handleSelectImage',
    });
  },
  getState: function(){
    return {
      current: this.current,
      count: this.count
    };
  },
  handleAddImage: function(){
    this.waitFor(["ImageStore"], function (imageStore) {
      var length = imageStore.getState().images.length;
      if (this.count < length) {
        this.count = length;
        this.selectedImage(this.count - 1);
        this.emit('change');
      }
    });
  },
  handleNextImage: function(){
    var next = this.current + 1;
    if (next >= this.count) next = 0;
    this.selectedImage(next);
    this.emit('change');
  },
  handlePrevImage: function(){
    var prev = this.current - 1;
    if (prev < 0) prev = this.count - 1;
    this.selectedImage(prev);
    this.emit('change');
  },
  handleSelectImage: function (payload) {
    this.selectedImage(payload.index);
    this.emit('change');
  },
  selectedImage: function (index) {
    this.current = index;
  }
});

module.exports = CarouselStore;