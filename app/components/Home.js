var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var MainContainer = require('./MainContainer');
var Home = React.createClass({
  render: function() {
    return (
      <MainContainer>
        <h5>welcome to</h5>
        <h1>GitHub Battle</h1>
        <p className="lead">A React.JS Project that lets you face off GitHub Profiles of your choice.</p>
        <Link to='/playerOne'>
          <button type='button' className='btn btn-lg btn-success'>Get Started</button>
        </Link>
      </MainContainer>
    );
  }
});

module.exports = Home;

