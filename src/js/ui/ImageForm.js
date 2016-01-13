var React = require('react');

var ImageForm = React.createClass({
  propTypes: {
    onAddImage: React.PropTypes.func.isRequired
  },
  setRef: function(ref){
    this.ref = ref;
  },
  handleSubmit: function (e) {
    e.preventDefault();
    this.props.onAddImage(this.ref.value);
    this.ref.value = '';
  },
  render: function(){
    return (
      <div className="row">
        <form onSubmit={this.handleSubmit} role="form">
          <div className="input-group">
            <input type="text" className="form-control" ref={this.setRef}/>
            <span className="input-group-btn">
              <button type="submit" className="btn btn-primary">Add Image</button>
            </span>
          </div>        
        </form>
      </div>
    );
  }
});

module.exports = ImageForm ;