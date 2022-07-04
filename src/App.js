import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import CatIndex from './pages/CatIndex'
import CatShow from './pages/CatShow'
import CatNew from './pages/CatNew'
import CatEdit from './pages/CatEdit'
import NotFound from './pages/NotFound'
import mockCats from './mockCats.js'
import './App.css'
import {
  BrowserRouter as Router, 
  Route,
  Switch
} from 'react-router-dom'
import { NavLink } from 'react-router-dom'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      cats: mockCats
    }
  }
    createCat = (cat) => {
      console.log(cat)
    }
render() {
return(

  <Router>
        <Header/>
        <h1>
          <br/>
          <br/>
          <br/>
          

        </h1>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/catindex" render={() => <CatIndex cats={this.state.cats} />} /> 
          <Route path="/catshow/:id" render={(props) => {
            let id = props.match.params.id
            let cat = this.state.cats.find(cat => cat.id === +id)
            return <CatShow cat={cat} />
          }} />

          <Route path="/catnew" 
          render={(props) => <CatNew createCat={this.createCat} />}
          />
          <Route path="/catedit" component={CatEdit} />
          <Route component={NotFound}/>
        </Switch>
        <Footer/>
      </Router>
      
       )    
      }
    }
