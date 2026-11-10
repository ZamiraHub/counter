import React, { Component } from 'react'

class ClassCounter extends Component {
  state={
    count:110
  }
  plus=()=>{
    this.setState({count:this.state.count+1})
  }
  minus=()=>{
    this.setState({count:this.state.count-1})
  }
  reset=()=>{
    this.setState({count:0})
  }
  render() {
    return (
      <div>
        <h1>Class Component Counter</h1>
        <h3>{this.props.num}</h3>
        <button onClick={this.plus}>+</button>
        <button onclick={this.reset}>reset</button>
        <button onClick={this.minus}>-</button>
      </div>
    )
  }
}
export default ClassCounter