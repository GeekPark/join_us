import React from 'react';
import _ from 'lodash';
import { getData } from 'pageData';

require('./index.styl');

var JobCont = React.createClass({
  render: function () {
    return (
      <div className="modal-job-list">
        <h3>职位诱惑</h3>
        <div className="modal-job-request" dangerouslySetInnerHTML={{__html: this.props.request}}></div>
        <div className="modal-job-des" dangerouslySetInnerHTML={{__html: this.props.des}}></div>
      </div>
    );
  }
});
var ModalCont = React.createClass({
  stat: function(action) {
    window.ga('send', 'event', 'position', action, this.props.title);
  },
  render: function () {
    var fillData;
    if(this.props.type === 'iframe') {
      fillData = <div className="videoIframe">{this.props.data}</div>;
    } else {
      fillData = <JobCont {...this.props} />;
    }
    return (
      <div className="modal-item" id={'modal-' + this.props.id}>
        <h3 className="modal-title">{this.props.title}</h3>
        <a href="mailto:hr@geekpark.net"
           className="modal-mailto"
           onClick={() => this.stat('mail')}
           >
          hr@geekpark.net
        </a>
        {
          this.props.url ?
            <a href={this.props.url} onClick={() => this.stat('lagou')} target="_blank" className="modal-mailto modal-lagou">去拉勾投简历</a>
            : null
        }
        {fillData}
      </div>
    );
  }
});

var Modal = React.createClass({
  render: function () {
    const modalData = getData('jobs.json');

    var modalList = _.map(modalData, (ele, index) => {
      return <ModalCont
        title={ele.title}
        id={ele.id}
        type={ele.contType}
        data={ele.content}
        key={index}
        request={ele.request}
        des={ele.des}
        url={ele.url}
        />;
    });
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
