import React from 'react'

function Users(props) {
  return (
    <div>
       {props.usersJsx.map((user, index) => (
        <div key={index}>
          <p>Name : {(user.name)}</p>
          <p>Email : {user.email}</p>
          <p>Gen : {user.gen}</p>
          <br />
        </div>
      ))}
    </div>
  )
}

export default Users;
