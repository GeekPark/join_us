var $ = require('jquery');
var _ = require('lodash');

// modal control js
function initModal () {
  var $body = $('body');
  var $modal = $('#modal');

  // append modal mask
  $('body').append('<div class="modal-bg" id="modal-bg"></div>');

  // 动态调整模态框内容的高度
  function adjustContHeight() {
    if(!$modal.hasClass('modal-show')) return;
    $('.modal-job-list').height(
      $('.modal-dialog').height() - $('.modal-item.show .modal-title').height() - 110
    );
  }

  var modal = (() => {
    // modal mask
    var $modalBg = $('#modal-bg');

    // modal close method
    var close = () => {
      // lock page scroll
      $body.removeClass('modal-on');

      $modal.removeClass('fadein');
      $modalBg.removeClass('fadein');
      setTimeout(() => {
        $modal.removeClass('modal-show');
        $modalBg.removeClass('show');
      }, 500);
    };

    // modal show method
    var show = (id) => {
      // reset all modal child item, find the correct child
      $modal.find('.modal-item').removeClass('show');
      $modal.find('#modal-' + id).addClass('show');

      // unlock page scroll
      $body.addClass('modal-on');


      // appear modal
      $modal.addClass('modal-show');
      // show modal mask
      $modalBg.addClass('show');

      setTimeout(() => {
        $modal.addClass('fadein');
        $modalBg.addClass('fadein');
      }, 100);

      // recount modalcont height
      adjustContHeight();

      // mount close modal
      $modalBg.on('click', () => close());
    };
    return { show, close };
  })();

  $('.js-modal-close').click(() => modal.close());

  $('.js-show-modal').click(function () {
    var id = $(this).data('modalid');
    console.log(id);
    modal.show(id);
  });
}

module.exports = initModal;
