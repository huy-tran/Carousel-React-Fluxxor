var React = require('react');

var Carousel = React.createClass({
  propTypes: {
    images: React.PropTypes.array.isRequired,
    selected: React.PropTypes.number.isRequired,
    onClickNext: React.PropTypes.func.isRequired,
    onClickPrev: React.PropTypes.func.isRequired,
    onSelectImage: React.PropTypes.func.isRequired
  },
  onClickDot: function(index){
    this.props.onSelectImage(index);
  },
  render: function(){
    var left = this.props.selected * 640 * -1,
        ulStyle = {
          width: this.props.images.length * 640,
          transform: `translate(${left}px, 0)`,
          msTransform: `translate(${left}px, 0)`,
          WebkitTransform: `translate(${left}px, 0)`
        };
    return (
      <div>
        <div className="carousel-stage">
          <ul style={ulStyle} className="carousel-list">
            {this.props.images.map(function (image, i) {
              return <li key={i}><img src={image} /></li>;
            })}
          </ul>
          <ul className="dots">
            {this.props.images.map(function (image, i) {
              var activeClass = i === this.props.selected ? 'active' : '';
              return <li key={i} className={"circle " + activeClass} onClick={this.onClickDot.bind(this, i)}></li>
            }.bind(this))}
          </ul>
        </div>
        <div className="row">
          <div className="btn-group col-sm-3 col-sm-offset-5" style={{marginBottom: 20}}>
            <button type="button" className="btn btn-default" onClick={this.props.onClickPrev}>Prev</button>
            <button type="button" className="btn btn-default" onClick={this.props.onClickNext}>Next</button>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Carousel ;