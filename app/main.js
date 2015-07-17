var $ = require('jquery');
var React = require('react');

var Header = require('./components/header');
var About = require('./components/about');

require('./main.styl');

var Layout = React.createClass({
  render: function () {
    return (
      <div>
        <Header />
        <About />
      </div>
    );
  }
});

React.render(<Layout />, $('#app')[0]);
