import React, { Component } from 'react'
import {
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button
} from 'reactstrap'
import { NavLink } from 'react-router-dom'


class CatShow extends Component {
  render() {
    const {cat} = this.props
    console.log(this.props.cat)
    
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
      <h3>One Cat</h3>
            <CardTitle tag= "h1">Hey! My name is {cat.name}</CardTitle>
            <img src={cat.image} alt="cat" />
        <CardText>I am {cat.age} years old. I enjoy {cat.enjoys}.</CardText>
      </>
    )
  }
  
}
export default CatShow

