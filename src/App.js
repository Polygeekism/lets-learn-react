import React from 'react';
//react.proptypes has been deprecated this replaces that functionality
//import PropTypes from 'prop-types';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      txt: 'this is the state text'
    }
  }
  update( e ){
    this.setState({txt: e.target.value})
  }
  render() {
    //let txt = this.props.txt
    return (
      <div>
        <input type="text" onChange={this.update.bind(this)}/>
        <h1>{this.state.txt}</h1>
      </div>
    )
  }
}
//proptypes are a collection of values that are meant to be passed in statically
// App.propTypes = {
//   txt: PropTypes.string,
//   cat: PropTypes.number.isRequired
// }
// App.defaultProps = {
//   txt: "this is the default txt"
// }

export default App;