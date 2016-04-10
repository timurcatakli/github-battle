var React = require('react');
var PropTypes = React.PropTypes;
var divStyle = {
  backgroundColor: 'white',
  WebkitTransition: 'all', // note the capital 'W' here
  msTransition: 'all' // 'ms' is the only lowercase vendor prefix
};

//functional stateless components
function Prompt (props){
  return (
      <div style={divStyle} className="jumbotron col-sm-6 col-sm-offset-3 text-center">
        <h1>{props.header}</h1>
        <div className="col-sm-12">
          <form onSubmit={props.onSubmitUser}>
            <div className="form-group">
              <input
                onChange = {props.onUpdateUser}
                value = {props.username}
                className = "form-control"
                placeholder = "Github Username"
                type = "text" />
            </div>
            <div className = "form-group col-sm-4 col-sm-offset-4">
              <button className="btn btn-block btn-success" type="submit">Continue</button>
            </div>
          </form>
        </div>
      </div>
    )
}


Prompt.propTypes = {
    header: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    onSubmitUser: PropTypes.func.isRequired,
    onUpdateUser: PropTypes.func.isRequired,
}


module.exports  = Prompt;