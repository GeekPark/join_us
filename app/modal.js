var $ = require('jquery');
var _ = require('lodash');

// modal control js
$(function () {
  var $modal = $('#modal');

  $('.js-modal-close').click(function () {
    $modal.removeClass('modal-show');
  });

  $('.js-show-modal').click(function () {
    var name = $(this).data('name');
    
  });
});
