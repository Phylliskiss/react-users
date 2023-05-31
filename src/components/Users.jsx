import React from "react";
import { Button, Card, Col } from "react-bootstrap";

function Users({usersJsx, deleteUser}) {

  const handleDeleteUser = (e) => {
    e.preventDefault();
    // console.log(deleted);
    deleteUser(id);
  };

  return (
    <Col className="myuser">
      {usersJsx.map((user) => (
        <div key={user.id}>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>User Details</Card.Title>
              <Card.Text>
                Name : {user.name} <br />
                Email : {user.email}<br />
                Gen : {user.gen}
                <br />
              </Card.Text>
              <Card.Link href="#">
                <Button variant="primary">Edit</Button>
              </Card.Link>
              <Card.Link href="#">
                <Button variant="danger" onClick={handleDeleteUser}>
                  Delete
                </Button>
              </Card.Link>
            </Card.Body>
          </Card>
        </div>
      ))}
    </Col>
  );
}

export default Users;
