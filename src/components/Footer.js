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
            <h1 style={mystyle}>Footer</h1>
            <p>
                <h3>Welcome to the Jungle</h3>
           </p>
            </div>
            
        )
    }
}

export default Footer