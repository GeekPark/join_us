var React = require('react');
var pageData = require('pageData');
require('./index.styl');

var Footer = React.createClass({
  render: function () {
    return (
      <div className="footer-wrap">
        <div className="footer-logo"><img src={pageData.footer.logo} /></div>
        <div className="container footer-title">{pageData.footer.title}</div>
        <h3 className="footer-apply">如何申请？</h3>
        <div className="footer-email">
          <span>发送简历至</span>
          <a href={'mailto:' + pageData.footer.email}>{pageData.footer.email}</a>
        </div>
      </div>
    );
  }
});

module.exports = Footer;
