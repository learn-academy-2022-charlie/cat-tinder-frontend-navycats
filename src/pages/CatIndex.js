import React, { Component } from 'react'
import { Card, CardTitle, Col, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'

export default class CatIndex extends Component {
  render() {
    const {cats} = this.props
    return (
      <>
      <h3>Big Cats Roar</h3>
        <br />
        <Col sm="6">
          {cats && cats.map((cat)=> {
            return(
              <Card body key={cat.id}>
                <CardTitle>
                  <h4>{cat.name}</h4>
                </CardTitle>
                <NavLink to={`/catshow/${cat.id}`}>
                  <Button> More Info </Button>
              </NavLink>
              </Card>
            )
          })}
        </Col>
      </>
    )
  }
}
