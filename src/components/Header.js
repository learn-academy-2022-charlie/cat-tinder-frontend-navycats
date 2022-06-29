import React, { Component } from 'react'

class Header extends Component{
    render(){
        const mystyle = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
        };
        return(
            <div>
            <h1 style={mystyle}>Header</h1>
            <p>Welcome to the Jungle</p>
            </div>
            
        
        )
    }
}

export default Header