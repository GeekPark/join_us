var $ = require('jquery');
var _ = require('lodash');

// modal control js
$(function () {
  var $modal = $('#modal');

  var modal = () => {
    var show = (id) => {
      $modal.find('.modal-item').removeClass('show');
      $modal.find('#' + id).addClass('show');
    };
    return {
      show: show
    };
  };

  $('.js-modal-close').click(() => {
    $modal.removeClass('modal-show');
  });

  $('.js-show-modal').click(function () {
    var id = $(this).data('modalid');
    modal.show(id);
  });
});
