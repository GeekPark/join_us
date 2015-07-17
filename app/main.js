var $ = require('jquery');
var React = require('react');
var Header = require('./components/header');

require('./main.styl');

main();

function main() {
    React.render(<Header />, $('#app')[0]);
}
