// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import Home from './Home.js'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({adapter: new Adapter() })

  describe("When Home renders to the user", ()=>{
    let homeRender
    beforeEach(() => {
        homeRender = shallow(<Home />)
    })
    it("displays a header", ()=>{
        const homeHeader = homeRender.find("h1")
        expect(homeHeader.length).toEqual(1)
    })
    it ("it displays a text", ()=>{
        const homeSpace = homeRender.find("h1")
        expect(homeSpace.text()).toEqual("")
    })
  })
