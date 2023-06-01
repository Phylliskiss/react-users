import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
// import "./App.css";
import Users from "./components/Users";
import UsersForm from "./components/UsersForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuid } from "uuid";


function App() {
  const [users, setUsers] = useState([
    { id:uuid(), name: "Aseda", email: "Danso@yahoo.com", gen: "24" },

    { id:uuid(), name: "Duffy", email: "Duffle@yahoo.com", gen: "25" },

    { id:uuid(), name: "Adams", email: "Daughty@yahoo.com", gen: "26" },

    {id:uuid(), name: "Adams", email: "Daughty@yahoo.com", gen: "26" },
  ]);

  // the use state is a method that holds an object and arrays with mulitple objects inside
  // {} = objects are passed this way
  // []=arrays are passed with {} objects inside separated by commas like the example above
  // mulitiple objects can only be passed inside arrays

  const handleAddUser = (newUser) =>{
    setUsers([...users,newUser],
      
    )
    
  }

  const deleteUser = (userId) =>{
    
    setUsers(users.filter((user) =>  user.id !== userId))


  }

  const editUser = (id, editedUser) =>{
    setUsers(users.map((user) => user.id ===id ? editedUser : user))
  }
  

  //make a copy of something or an existing data with ...name of object, eg ...users
  //then add newUser to it with a comma ...users,newUser it won't work without it
  return (
    <div className="form-body">
      <Container fluid>
        <Row>
          <Col>
            <UsersForm title={'Personal Data'} newUser={handleAddUser} />
          </Col>
          <Col>
            <Users title={'Users Data'} usersJsx={users} deleteUser={deleteUser} editUser={editUser}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

// userJsx is a name we've decided to give as the props
// the users from the setState is holding 4 items so no need destructuring.
