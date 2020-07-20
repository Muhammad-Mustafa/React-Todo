import React from 'react';
import './App.css';

class App extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      count: 0,
    }
  };

  increaseCount(){
    this.setState({count: this.state.count + 1});
    this.setState({count: this.state.count + 2});
    this.setState({count: this.state.count + 1});

  }

  render(){
    return(
      <>
      <h1>Hello world</h1>
      <div>
        {/* <button onClick={this.increaseCount.bind(this)}>Increase</button> */}
        <button onClick={() =>  this.increaseCount()}>Increase</button>
      </div>
      <h3>{this.state.count}</h3>
      </>
    )
  }
}

export default App;
