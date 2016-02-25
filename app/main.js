var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');

var Header = require('./components/header/index.jsx');
var About = require('./components/about/index.jsx');
var Culture = require('./components/culture/index.jsx');
var Positions  = require('./components/positions/index.jsx');
var Footer = require('./components/footer/index.jsx');
var Modal = require('./components/modal/index.jsx');

var fetchData = require('./data/fetch').fetch;
var initModal = require('./modal.js');

require('./main.styl');

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
fetchData().then(() => {
  ReactDOM.render(<Layout />, $('#app')[0]);
  dealLoaded();
  initModal();
}, () => {
  alert('fetch fail');
});



function dealLoaded () {
  // 职位列表 hover 滑动
  $('.positions-item a').hover(function () {
    $(this).css('background-color', $(this).data('color'));
  }, function () {
    $(this).css('background-color', '#fff');
  });

  // 顶部滑动到职位的按钮
  $('#go-to-positions').on('click', function (e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: parseInt($('#positions').offset().top) + 'px'
    }, 800);
  });

  // 视频大小缩放
  let $video = $('#video-frame');
  let videoRatio = $video.width() / $video.height();
  let windowW = $(window).width();
  if(windowW < $video.width()) {
    let newW = windowW - 30;
    $video.width(newW);
    $video.height(newW / videoRatio);
  }
}
