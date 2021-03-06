import _ from 'lodash';
import React from 'react';
import { getData } from 'pageData';

require('./index.styl');

var Group = React.createClass({
  render: function () {
    var jobs = this.props.jobs;
    var list = _.map(jobs, (ele, index) => {
      return (
        <div className="positions-item" key={index}>
          <a href="javascript:;"
            className="js-show-modal"
            data-modalid={ele.id}
            style={{borderColor: this.props.color}}
            data-color={this.props.color}
          >
            {ele.title}
          </a>
        </div>
      );
    });

    var groupClass = 'position-group column four';
    if(this.props.index % 2 !== 0) groupClass += ' offset-one';

    return (
      <div className={groupClass}>
        <h4 className="position-group-name">
          <span className="squre" style={{backgroundColor: this.props.color}}></span>
          {this.props.name}
        </h4>
        {list}
      </div>
    );
  }
});

var Positions = React.createClass({
  render: function () {
    let data = getData('position');
    data = _.filter(data, v => v.jobs.length);
    data = _.sortBy(data, v => v.jobs.length).reverse();

    var group = _.map(data, (ele, index) => {
      return <Group key={index} name={ele.depart} jobs={ele.jobs} index={index} color={ele.color} />;
    });
    return (
      <div className="positions-wrap tac" id="positions">
        <div className="positions-title">
          开放职位
        </div>
        <section className="container">
          {group}
          {group.length % 2 === 0 ? null :
            <div className="position-group column four offset-one"></div>
          }
        </section>
      </div>
    );
  }
});

module.exports = Positions;
