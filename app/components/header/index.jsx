import React from 'react';
import { getData } from 'pageData';

require('./index.styl');

var Header = React.createClass({
  render: function () {
    const data = getData('page.json');

    return (
      <div className="header-wrap">
        <h1 className="header-en">
          {data.header.en}
        </h1>
        <h2 className="header-title">
          {data.header.title}
        </h2>
        <div className="header-button-wrap">
          <a className="header-button" href="#positions" id="go-to-positions">
            {data.header.button}
          </a>
        </div>
      </div>
    );
  }
});

module.exports = Header;
