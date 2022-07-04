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
            <h1 style={mystyle}> Welcome to TinderCats!!</h1>
            <p>
                <h3></h3>
            </p>
            </div>
            
        
        )
    }
}

export default Header