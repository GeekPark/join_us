var React = require('react');
var pageData = require('pageData');
require('./index.styl');

var Header = React.createClass({
  render: function () {
    return (
      <div className="header-wrap">
        <div className="header-title">
          {pageData.header.title}
        </div>
        <div className="header-button-wrap">
          <a className="header-button">
            {pageData.header.button}
          </a>
        </div>
      </div>
    );
  }
});

module.exports = Header;
