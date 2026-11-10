import React, { Component } from 'react'
import FuncCounter from './components/FuncCounter'
import ClassCounter from './components/ClassCounter'
import BishkekImg from './assets/images/_photo bishkek.jpg'

export default class App extends Component {
  state={
    count:110
  }
  render() {
    return (
      <div>
        <FuncCounter num={this.state.count}/>
        <hr/>
        <ClassCounter num={this.state.count}/>
        <img src={BishkekImg}/>
      </div>
    )
  }
}
