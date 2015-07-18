var React = require('react');
var _     = require('lodash');
var sectionData = require('pageData').culture;
require('./index.styl');


var ListItem = React.createClass({
  render: function () {
    return (
      // {if(this.props.offset) return offset-one}
      <li className="culture-item column five">
        <div className="culture-item-title">
          {this.props.title}
        </div>
        <div className="culture-item-des">
          {this.props.des}
        </div>
      </li>
    );
  }
});

var list = _.map(sectionData.list, (ele, index) => {
  var offset = index % 2 === 0;
  return <ListItem title={ele.title} des={ele.des} offset={offset}/>;
});

var Header = React.createClass({
  render: function () {
    return (
      <div className="culture-wrap tac">
        <h2 className="section-title">
          {sectionData.title}
        </h2>
        <ul className="culture-list">
          {list}
        </ul>
      </div>
    );
  }
});

module.exports = Header;