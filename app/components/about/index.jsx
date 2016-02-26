import React from 'react';
import { getData } from 'pageData';

require('./index.styl');

var About = React.createClass({
  render: function () {
    const pageData = getData('page.json');
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
