import React, { Component } from 'react'
import { Card, CardTitle, Col } from 'reactstrap'
import { NavLink } from 'react-router-dom'
class CatIndex extends Component {
  render() {
    return (
      <>
        <br />
        <Col sm="6">
          {this.props.cats.map(cat => {
            return(
              <Card body key={cat.id}>
                <CardTitle>
                  <h4>{cat.name}</h4>
                </CardTitle>
              </Card>
            )
          })}
        </Col>
      </>
    )
  }
}
export default CatIndex