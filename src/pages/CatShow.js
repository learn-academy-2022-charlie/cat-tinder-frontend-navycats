import React, { Component } from 'react'
import {Col, Card, CardTitle, CardText, Button} from 'reactstrap'
import { NavLink } from 'react-router-dom'
class CatShow extends Component {
  render() {
    const {cat} = this.props
    console.log(cat.name)
    return (
      <>
      <Col sm="6">
      <Card body>
        <CardTitle>Hi, my name is {this.props.cat.name}!</CardTitle>
        <img src={this.props.cat.image} alt="adorable cat" />
          <CardText>I am {this.props.cat.age} years old. I enjoy  {this.props.cat.enjoys}.</CardText>
             <NavLink to={`/catshow/${cat.id}`}>
             <Button> More Info </Button> 
             </NavLink>
        </Card>
      </Col>
      </>
    )
  }
  
}
export default CatShow

