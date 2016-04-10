var React = require('react');
var divStyle = {
  backgroundColor: 'white',
  WebkitTransition: 'all', // note the capital 'W' here
  msTransition: 'all' // 'ms' is the only lowercase vendor prefix
};

function MainContainer (props) {
  return (
    <div style={divStyle} className="jumbotron col-sm-12 text-center">
      {props.children}
    </div>
  )
}

module.exports = MainContainer;