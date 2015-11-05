var _ = require('lodash');
var pageData = require('./page');

var data = _.assign(
  {},
  pageData,
  require('./positions'),
  {
    modal: []
  }
);

data.modal.push({
  id: 'about-video',
  contType: 'iframe',
  content: 'video on here'
});

['kehubu', 'jikejiasu', 'shejibu', 'xiangmuyunying', 'jikeshiyan'].forEach(function (path){
  require('./modal/' + path).forEach(function (modalData){
    data.modal.push(modalData);
  });
});

module.exports = data;
