// Imports React into our test file.
import React, { Component } from 'react'

class NotFound extends Component {
    render() {
      return (
        <div>NOTFOUND - Just like Sean's thoughts right now</div>
      )
    }
  }
  describe("When NotFound renders to the user", ()=>{
    let notFoundRender
    beforeEach(() => {
        notFoundRender = shallow(<NotFound />)
    })
    it("displays a header", ()=>{
        const homeImageRender = homeRender.find("img")//or("h3")
        expect(homeImageRender.length).toEqual(1)
    })
    it ("it displays a text", ()=>{
        const notFoundRender = notFoundRender.find("h3")
        expect(notFoundRender.text()).toEqual("You're Lost!")
    })
  })

  export default NotFound

  
    
