var React = require('react');
var _ = require('lodash');
var modalData = require('pageData').modal;
require('./index.styl');
var JobCont = React.createClass({
  render: function () {
    var data = this.props.data;
    var getList = function (name) {
      return _.map(data[name], (ele, index) => {
        return <li className="modal-job-li" key={index}>
          {ele}
        </li>;
      });
    };
    var getItem = function (title, name) {
      if(!data[name]) return;
      return (
        <div className="modal-job-item">
          <h4>{title}</h4>
          <ul>
            {getList(name)}
          </ul>
        </div>
      );
    };
    return (
      <div className="modal-job-list">
        {getItem('', 'des')}
        {getItem('岗位职责', 'duty')}
        {getItem('职位要求', 'skills')}
        {getItem('加分项', 'extra')}
        {getItem('你将获得', 'reward')}
      </div>
    );
  }
});
var ModalCont = React.createClass({
  render: function () {
    var fillData;
    if(this.props.type === 'job') {
      fillData = <JobCont data={this.props.data} />;
    }
    if(this.props.type === 'iframe') {
      fillData = <div className="videoIframe">{this.props.data}</div>;
    }
    return (
      <div className="modal-item" id={'modal-' + this.props.id}>
        <h3 className="modal-title">{this.props.title}</h3>
        <a href="mailto:hr@geekpark.net"
           className="modal-mailto">
          hr@geekpark.net
        </a>
        {fillData}
      </div>
    );
  }
});
var modalList = _.map(modalData, (ele, index) => {
  return <ModalCont
    title={ele.title}
    id={ele.id}
    type={ele.contType}
    data={ele.content}
    key={index}
  />;
});
var Modal = React.createClass({
  render: function () {
    return (
      <section className="modal-wrap" id="modal">
        <div className="modal-dialog">
          <div className="modal-container">
            <a href="javascript:;" className="modal-close js-modal-close">
              <i className="icon-close"></i>
            </a>
            {modalList}
          </div>
        </div>
      </section>
    );
  }
});
module.exports = Modal;
