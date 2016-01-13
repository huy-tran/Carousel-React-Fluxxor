var Fluxxor = require('fluxxor');
var AppConstants = require('../constants/AppConstants');

var ImageStore = Fluxxor.createStore({
  initialize: function(){
    this.images = [];
    this.bindActions(AppConstants.ADD_IMAGE, this.handleAddImage);
  },
  getState: function(){
    return { images: this.images };
  },
  handleAddImage: function (payload) {
    if (!payload.url || this.images.indexOf(payload.url) > -1)
      return
    var parts = payload.url.split(".");
    var ext = parts[parts.length - 1];
    if (['jpg', 'png', 'jpeg', 'gif'].indexOf(ext) > -1) {
      this.images.push(payload.url);
      this.emit('change');
    }
  }
});

module.exports = ImageStore;