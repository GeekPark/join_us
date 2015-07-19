var React = require('react');
var _     = require('lodash');
var sectionData = require('pageData').culture;
require('./index.styl');


var ListItem = React.createClass({
  render: function () {
    var itemClass = 'culture-item column five';
    if(this.props.offset) itemClass += ' offset-one';

    return (
      <li className={itemClass}>
        <div className="culture-item-title">
          <span className="squre"></span>
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
  var offset = index % 2 !== 0;
  return <ListItem title={ele.title} des={ele.des} offset={offset} key={index}/>;
});

var imagesList = _.map(sectionData.images, (img, index) => {
  var imgClass = 'image column five';
  if(index % 2 !== 0) imgClass += ' offset-one';

  return (
    <div className={imgClass} key={index}>
      <img className="culture-img" src={img.url + '?imageView2/2/w/850'} />
      <div className="img-title">{img.title}</div>
      <div className="img-bg"></div>
    </div>
  );
});

var Culture = React.createClass({
  render: function () {
    return (
      <div className="culture-wrap container tac">
        <h2 className="section-title">
          {sectionData.title}
        </h2>
        <ul className="culture-list">
          {list}
        </ul>
        <h4>{sectionData.condition}</h4>
        <ul className="imagesList">
          {imagesList}
        </ul>
      </div>
    );
  }
});

module.exports = Culture;
