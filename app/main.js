var $ = require('jquery');
var React = require('react');

var Header = require('./components/header');
var About = require('./components/about');
var Culture = require('./components/culture');
var Positions  = require('./components/positions');
var Footer = require('./components/footer');
var Modal = require('./components/modal');

require('./main.styl');
require('./modal.js');

var Layout = React.createClass({
  render: function () {
    return (
      <div>
        <Header />
        <About />
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

  $('#go-to-positions').on('click', function (e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: parseInt($('#positions').offset().top) + 'px'
    }, 800);
  });
});
