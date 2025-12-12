import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Person from './components/person';


class App extends React.Component{
constructor(){
  super()
 this.state={
    Person:{ fullName:"Mahdi",bio:"software developer", imgSrc:"", profession:"Instructor"},
    shows:false,
    count:0
  }
}
componentDidMount(){
  setInterval(() => this.setState(
  { count:this.state.count+1}
  ),  1000 )};

render(){
  return(
    <>
    <p>{this.state.count}</p>
      <Person  data={this.state} />
      <button  onClick={()=>this.setState({shows:!this.state.shows})}>Toggle</button>
    </>
  )
}
}
export default App;
