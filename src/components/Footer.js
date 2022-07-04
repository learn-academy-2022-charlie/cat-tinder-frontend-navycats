import React, { Component } from 'react'

class Footer extends Component{
    render(){
        const mystyle = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
        };
        return(
            <div>
            <h1 style={mystyle}>Welcome to the Jungle</h1>
            <p>
                <h3>Big Cats Roar!</h3>
           </p>
            </div>
            
        )
    }
}

export default Footer