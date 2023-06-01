import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const EditUsersForm = ({ prefil, editUser,handleClose }) => {
  const [users, setUsers] = useState({
    id: prefil.id,
    name: prefil.name,
    email: prefil.email,
    gen: prefil.gen,
  });

  const userChange = (e) => {
    e.preventDefault();
    setUsers({
      ...users,
      [e.target.name]: e.target.value,
    });
  };

  const userEditSubmit = (e) => {
    e.preventDefault();
    console.log("item saved");
    editUser(users, users.id);
    handleClose();
  };


  return (
    <div>
      <Form onSubmit={userEditSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={users.name}
            placeholder="Enter name"
            name="name"
            onChange={userChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={users.email}
            onChange={userChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Gen</Form.Label>
          <Form.Control
            type="text"
            placeholder="enter gen"
            name="gen"
            value={users.gen}
            onChange={userChange}
            required
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default EditUsersForm;
