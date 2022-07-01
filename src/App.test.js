import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App.js' 
import Home from './pages/Home'
Enzyme.configure({ adapter: new Adapter() })

describe("When App.js renders to the user", () => {
    let appRender
    beforeEach(()=>{
      appRender= shallow(<App />)
    })
  it("it displays a header and a footer", () => {
    
    const appHeaderRender = appRender.find("Header")
    expect(appHeaderRender.length).toEqual(1)
  })
})
it("it displays a footer", () => {
  const appFooterRender = appRender.find("Footer")
  expect(appFooterRender.length).toEqual(1)
})

 