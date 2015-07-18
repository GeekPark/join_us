var React = require('react');
var pageData = require('pageData');
require('./index.styl');

var Header = React.createClass({
  render: function () {
    return (
      <div className="header-wrap">
        <h1 className="header-en">
          {pageData.header.en}
        </h1>
        <h2 className="header-title">
          {pageData.header.title}
        </h2>
        <div className="header-button-wrap">
          <a className="header-button" href="#positions" id="go-to-positions">
            {pageData.header.button}
          </a>
        </div>
      </div>
    );
  }
});

module.exports = Header;
