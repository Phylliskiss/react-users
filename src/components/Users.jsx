import React, { useState } from "react";
import { Button, Card, Col, Modal } from "react-bootstrap";
import EditUsersForm from "./EditUsersForm";

function Users({ usersJsx, deleteUser, editUser }) {
  const [prefil, setPrefil] = useState(null);

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = (user) => {
    setShow(true);
    setPrefil(user);
  };

  const handleDeleteUser = (userId) => {
    // console.log(userId);
    deleteUser(userId);
  };

  return (
    <>
      <Col className="myuser">
        {usersJsx.map((user) => (
          <div key={user.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>User Details</Card.Title>
                <Card.Text>
                  Name : {user.name} <br />
                  Email : {user.email}
                  <br />
                  Gen : {user.gen}
                  <br />
                </Card.Text>
                <div>
                  <Button
                    className="me-4"
                    variant="primary"
                    onClick={() => handleShow(user)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    Delete
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Col>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditUsersForm
            prefil={prefil}
            editUser={editUser}
            handleClose={handleClose}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit" onClick={handleClose}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Users;
