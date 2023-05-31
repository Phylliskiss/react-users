import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import { Button, Form } from "react-bootstrap";

class UsersForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      gen: "",
      id: uuid(),
    };

    this.userChange = (e) => {
      e.preventDefault();
      this.setState({
        [e.target.name]: e.target.value,
      });
    };

    this.userSubmit = (e) => {
      e.preventDefault();
      // console.log(this.state);
      this.props.newUser(this.state);
      
      this.setState({
        name: "",
        email: "",
        gen: "",
      });
    };

   

  }

  render() {
    return (
      <Form onSubmit={this.userSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={this.state.name}
            placeholder="Enter name"
            name="name"
            onChange={this.userChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={this.state.email}
            onChange={this.userChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Gen</Form.Label>
          <Form.Control
            type="text"
            placeholder="enter gen"
            name="gen"
            value={this.state.gen}
            onChange={this.userChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default UsersForm;

// gudies
// first name your input in the form control in bootstrap
//Wire up the functionality in 3 steps
//define the state this means it's initial value which was empty in this case
// define the handlechange event with the e.preventDefault and onChange event to be called on the control
//// define the handlesubmit event with the e.preventDefault and onsubmit event to be called on the form tag, console .log or display in the UI
