var React = require('react');

require('font-awesome-webpack');
require('./index.styl');

var Modal = React.createClass({
  render: function () {
    var wrapClass = 'modal-wrap';
    if(this.state.show) wrapClass += ' modal-show';

    return (
      <section className={wrapClass}>
        <div className="modal-dialog">
          <div className="modal-container">
            <h3 className="modal-title">{this.props.title}</h3>
            <a href="#" className="modal-close" onClick={this.closeModal()}>
              <i className="fa fa-close"></i>
            </a>

            <div className="modal-cont"></div>
          </div>
        </div>
      </section>
    );
  }
});

module.exports = Modal;
