import React, { Component } from 'react'

class NotFound extends Component {
  render() {
    const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
    };
    return(
        <div>
        <h1 style={mystyle}>YourLost</h1>
        <p>Welcome to the Jungle</p>
        </div>
        
    
    
    )
  }
}
export default NotFound