var $ = require('jquery');
var React = require('react');

var Header = require('./components/header');
var About = require('./components/about');
var Culture = require('./components/culture');
<<<<<<< HEAD
var Modal = require('./components/modal');
var Footer = require('./components/footer');
=======
var Modal  = require('./components/modal');

>>>>>>> 完成模态框静态布局

require('./main.styl');

var Layout = React.createClass({
  render: function () {
    return (
      <div>
        <Header />
        <About />
<<<<<<< HEAD
        <Culture />
        <Modal />
        <Footer/>
=======
        <section className="container">
          <Culture />
        </section>
        <Modal />
>>>>>>> 完成模态框静态布局
      </div>
    );
  }
});

React.render(<Layout />, $('#app')[0]);

// jQuery Modal
$(function () {

});
