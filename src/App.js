import React from 'react';
//react.proptypes has been deprecated this replaces that functionality
//import PropTypes from 'prop-types';

// //-------Normalize Events-------
class App extends React.Component{
  constructor(){
    super();
    this.state = {currentEvent: '---'}
    this.update = this.update.bind(this)
  }
  update( e ){
    this.setState({currentEvent: e.type})
  }
  render(){
    return(
      <div>
        <textarea 
        onKeyPress={this.update}
        onCopy={this.update}
        onCut={this.update} 
        onPaste={this.update} 
        onFocus={this.update}
        onBlur={this.update}
        onDoubleClick={this.update}
        onTouchStart={this.update}
        onTouchMove={this.update}
        onTouchEnd={this.update}
        cols="30" 
        rows="10"/>
        <h1>{this.state.currentEvent}</h1>
          
      </div>
    )
  }
}

// //--------end Normalize----------
// //---------Title example---------
// class App extends React.Component{
//   render(){
//     return <Title text="Thext"/>
//   }
// }

// const Title = (props) => <h1>Title: {props.text}</h1>

// Title.propTypes = {
//   text(props, propName, component){
//     if (!(propName in props)){
//       return new Error('missing ${propName}')
//     }
//     if(props[propName].length < 6){
//       return new Error('${propname} was too short')
//     }
//   }
// }
// //---------end title

// //-------------Heart Example----------------
// class App extends React.Component {
//   render(){
//     return <Button>I <Heart />React</Button>
//   }
// }

// const Button = (props) => <button>{props.children}</button>

// class Heart extends React.Component {
//   render(){
//   return <span>&hearts;</span>
// }
// }
// //--------------End Heart---------------

////-----------Base Examples--------
// class App extends React.Component {
//   constructor(){
//     super();
//     this.state = {
//       txt: 'this is the state text',
//       //cat: 0
//     }
//   }
//   update( e ){
//     this.setState({txt: e.target.value})
//   }
//   render() {
//     //let txt = this.props.txt
//     return (
//       <div>
//         <h1>{this.state.txt}</h1>
//         <Widget update={this.update.bind(this)} />
//       </div>
//     )
//   }
// }

// const Widget = (props) =>
// <input type="text" onChange={props.update}/>

//proptypes are a collection of values that are meant to be passed in statically
// App.propTypes = {
//   txt: PropTypes.string,
//   cat: PropTypes.number.isRequired
// }
// App.defaultProps = {
//   txt: "this is the default txt"
// }
////--------end base examples-------

export default App;