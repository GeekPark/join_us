import React from 'react';
import { getData } from 'pageData';

require('./index.styl');

var About = React.createClass({
  render: function () {
    const pageData = getData('page.json');
    return (
      <div className="page-loading">
      </div>
    );
  }
});

module.exports = About;
