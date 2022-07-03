import React, { Component } from 'react'
import{ Form, FormGroup, Label, Input, Button} from 'reactstrap'
import { Redirect } from 'react-router-dom'

export default class CatNew extends Component {
  constructor(props){
    super(props)
    this.state = {
      newCat: {
        name: "",
        age: "",
        enjoys: "",
        image: ""
      }, 
      submitted: false
    }
  }
  handleChange = (e) => {
    let { newCat } = this.state
    newCat[e.target.name] = e.target.value
    this.setState({newCat: newCat})
  }
  handleSubmit = () => {
    this.props.createCat(this.state.newCat)
    this.setState({submitted: true})
  }

  render() {
    return (
    <>
        <Form>
        <FormGroup>
          <Label for="name">Name:</Label>
          <Input 
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.newCat.name}
          />
        </FormGroup>

        <FormGroup>
          <Label for="age">Age:</Label>
          <Input 
            type="text"
            name="age"
            onChange={this.handleChange}
            value={this.state.newCat.age}
          />
        </FormGroup>

        <FormGroup>
          <Label for="enjoys">Enjoys:</Label>
          <Input 
            type="text"
            name="enjoys"
            onChange={this.handleChange}
            value={this.state.newCat.enjoys}
          />
        </FormGroup>

        <FormGroup>
          <Label for="image">Insert a Selfie</Label>
          <Input 
            placeholder="need to create an upload box"
            type="text"
            name="image"
            onChange={this.handleChange}
            value={this.state.newCat.image}
          />
        </FormGroup>

        <Button
          name="submit"
          onClick={this.handleSubmit}>
          Create a New Profile
        </Button>
        {this.state.submitted && <Redirect push to="/catindex" />}
        </Form>
        </>
        )
      } 
    }



      