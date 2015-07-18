var $ = require('jquery');
var React = require('react');

var Header = require('./components/header');
var About = require('./components/about');
var Culture = require('./components/culture');
var Modal = require('./components/modal');

require('./main.styl');

var Layout = React.createClass({
  render: function () {
    return (
      <div>
        <Header />
        <About />
        <section className="container">
          <Culture />
        </section>
        <Modal title="前端开发工程师" show="false" />
      </div>
    );
  }
});

React.render(<Layout />, $('#app')[0]);
