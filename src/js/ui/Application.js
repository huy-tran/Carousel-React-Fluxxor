var React = require('react');
var Fluxxor = require('fluxxor');
var Carousel = require('./Carousel');
var ImageForm = require('./ImageForm');

var FluxMixin = Fluxxor.FluxMixin(React),
    StoreWatchMixin = Fluxxor.StoreWatchMixin;

var Application = React.createClass({
  mixins: [FluxMixin, StoreWatchMixin("ImageStore", "CarouselStore")],
  getStateFromFlux: function(){
    var flux = this.getFlux();
    return {
      images: flux.store("ImageStore").getState(),
      carousel: flux.store("CarouselStore").getState(),
    };
  },
  handleClickNext: function(){
    this.getFlux().actions.nextImage();
  },
  handleClickPrev: function(){
    this.getFlux().actions.prevImage();
  },
  handleSelectImage: function(index){
    this.getFlux().actions.selectImage(index);
  },
  handleAddImage: function(url){
    this.getFlux().actions.addImage(url);
  },
  render: function(){
    return (
      <div className="application-container">
        <Carousel images={this.state.images.images}
                  selected={this.state.carousel.current}
                  onClickNext={this.handleClickNext}
                  onClickPrev={this.handleClickPrev}
                  onSelectImage={this.handleSelectImage} />
        <ImageForm onAddImage={this.handleAddImage} />
      </div>
    );
  }
});

module.exports = Application ;