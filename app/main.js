var $ = require('jquery');
var React = require('react');

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
        <section className="container">
          <Culture />
        </section>
        <Modal title="前端开发工程师" show="false" />
        <Footer/>
      </div>
    );
  }
});

React.render(<Layout />, $('#app')[0]);
