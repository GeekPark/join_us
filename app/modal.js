var $ = require('jquery');
var _ = require('lodash');

// modal control js
$(function () {
  var $body = $('body');
  var $modal = $('#modal');

  var modal = (() => {
    var close = () => {
      var $modalBg = $('#modal-bg');
      $body.removeClass('modal-on');
      $modal.removeClass('modal-show');
      $modalBg.removeClass('show');
    };

    var show = (id) => {
      var $modalBg = $('#modal-bg');

      $modal.find('.modal-item').removeClass('show');
      $modal.find('#modal-' + id).addClass('show');

      if(!$modalBg.length) {
        $('body').append('<div class="modal-bg" id="modal-bg"></div>');
      }

      $modalBg = $('#modal-bg');
      $modal.addClass('modal-show');
      $body.addClass('modal-on');
      $modalBg.addClass('show');
      $modalBg.on('click', () => close());
    };
    return {
      show: show,
      close: close
    };
  })();

  $('.js-modal-close').click(() => {
    modal.close();
  });

  $('.js-show-modal').click(function () {
    var id = $(this).data('modalid');
    modal.show(id);
  });
});
