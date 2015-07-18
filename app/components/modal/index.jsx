var React = require('react');
var _ = require('lodash');
var modalData = require('pageData').modal;
require('font-awesome-webpack');
require('./index.styl');
var JobCont = React.createClass({
  render: function () {
    var data = this.props.data;
    var getList = function (name) {
      return _.map(data[name], ele => {
        return <li className="modal-job-li">
          {ele}
        </li>;
      });
    };
    var getItem = function (title, name) {
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
        {getItem('岗位职责', 'duty')}
        {getItem('职位要求', 'skills')}
        {getItem('加分项', 'extra')}
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
      <div className="modal-item" id={this.props.id}>
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
var modalList = _.map(modalData, ele => {
  return <ModalCont
    title={ele.title}
    id={ele.id}
    type={ele.contType}
    data={ele.content}
  />;
});
var Modal = React.createClass({
  render: function () {
    return (
      <section className="modal-wrap" id="modal">
        <div className="modal-dialog">
          <div className="modal-container">
            <a href="javascript:;" className="modal-close js-modal-close">
              <i className="fa fa-close"></i>
            </a>
            {modalList}
          </div>
        </div>
      </section>
    );
  }
});
module.exports = Modal;
