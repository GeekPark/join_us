var $ = require('jquery');
var React = require('react');

var Header = require('./components/header');
var About = require('./components/about');
var Culture = require('./components/culture');
<<<<<<< HEAD
var Positions  = require('./components/positions');
var Modal = require('./components/modal');
var Footer = require('./components/footer');

require('./main.styl');
require('./modal.js');

var Layout = React.createClass({
  render: function () {
    return (
      <div>
        <Header />
        <About />
<<<<<<< HEAD
=======
        <Culture />
        <Positions />
        <Footer/>
        <Modal />
      </div>
    );
  }
});

React.render(<Layout />, $('#app')[0]);

// 职位列表 hover 滑动
$(function () {
  $('.positions-item a').hover(function () {
    $(this).css('background-color', $(this).data('color'));
  }, function () {
    $(this).css('background-color', '#fff');
  });
});
