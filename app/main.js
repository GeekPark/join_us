var $ = require('jquery');
var React = require('react');
var Modal = require('react-modal');

var Header = require('./components/header');
var About = require('./components/about');
var Culture = require('./components/culture');
var Modal = require('./components/modal');
var Footer = require('./components/footer');

require('./main.styl');

var Layout = React.createClass({
  render: function () {
    return (
      <div>
        <Header />
        <About />
        <Culture />
        <Modal />
        <Footer/>
      </div>
    );
  }
});

React.render(<Layout />, $('#app')[0]);
