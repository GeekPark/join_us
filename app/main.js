var $ = require('jquery');
var React = require('react');

var Header = require('./components/header');
var About = require('./components/about');
var Culture = require('./components/culture');

require('./main.styl');

var Layout = React.createClass({
  render: function () {
    return (
      <div>
        <Header />
        <About />
        <section className="container">
          <Culture />
        </section>
      </div>
    );
  }
});

React.render(<Layout />, $('#app')[0]);
