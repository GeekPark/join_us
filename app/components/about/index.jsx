var React = require('react');
var pageData = require('pageData');
require('./index.styl');

var About = React.createClass({
  render: function () {
    return (
      <div className="about-wrap">
        <h4 className="about-motto">
          {pageData.about.motto}
        </h4>
        <p className="about-des">
          {pageData.about.des}
        </p>
      </div>
    );
  }
});

module.exports = About;
