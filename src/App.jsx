// import { useState } from 'react'
import { Component} from 'react';
import './App.css'


/////////////Class component
class App extends Component{
  state = {
    count: 0,
  };

  increment = () => {
    this.setState({count: this.state.count + 1})
  }
  decrement = () => {
    this.setState({count: this.state.count - 1})
  }
  double = () => {
    this.setState({count: this.state.count * 2})
  }
  half = () => {
    this.setState({count: this.state.count / 2})
  }

  render(){
    return (
      <>
        <div>The count is: {this.state.count}</div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.double}>Double</button>
        <button onClick={this.half}>Half</button>
      </>
    )
  }
}




export default App
