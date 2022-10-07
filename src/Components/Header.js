import React, { Component } from 'react'
import "./style.css"
 class Header extends Component {
  render() {
    return (
      <div id='nav'>
        <h2>Logo</h2>
       <div id='links'>
        <a href="">Home</a><a href="">About</a><a href="">Contact</a>
       </div>
      </div>
    )
  }
}
export default  Header
