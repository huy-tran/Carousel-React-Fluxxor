var AppConstants = require('../constants/AppConstants');

module.exports = {
  nextImage: function(){
    this.dispatch(AppConstants.NEXT_IMAGE);
  },
  prevImage: function(){
    this.dispatch(AppConstants.PREV_IMAGE);
  },
  selectImage: function (index) {
    this.dispatch(AppConstants.SELECT_IMAGE, {index: index});
  },
  addImage: function (url) {
    this.dispatch(AppConstants.ADD_IMAGE, {url: url});
  },
};