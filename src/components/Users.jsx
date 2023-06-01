import React, { useState } from "react";
import { Button, Card, Col, Modal } from "react-bootstrap";
import EditUsersForm from "./EditUsersForm";

function Users({ usersJsx, deleteUser, editUser, title }) {
  const [ prefil, setPrefil] = useState(null)

  const [show, setShow] = useState(false);


  const handleClose = () => {
    setShow(false);
  };
  const handleShow = (user) => {
    setShow(true);
    setPrefil(user)
  };

  const handleDeleteUser = (userId) => {
    // console.log(userId);
    deleteUser(userId);
  };


  return (
    <> 
          <h2>{title}</h2>

    <Col className="myuser">
      {usersJsx.map((user) => (
        <div key={user.id}>
          <Card style={{ width: "18rem" }} className="card">
            <Card.Body>
              <Card.Title className="usertitle">User Details</Card.Title>
              <Card.Text className="userdetails">
                Name : {user.name} <br />
                Email : {user.email}
                <br />
                Gen : {user.gen}
                <br />
              </Card.Text>
              <div >
                <Button className="me-4" variant="primary" onClick={()=>handleShow(user)}>Edit</Button>
                <Button
                className="deletebtn"
                  variant="danger"
                  onClick={() => handleDeleteUser(user.id)}>
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
         <EditUsersForm prefil={prefil} editUser={editUser} handleClose={handleClose}/>
        </Modal.Body>
      </Modal>
    </>

  );
}

export default Users;
