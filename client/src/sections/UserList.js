import React from "react";
import UserData from "./UserData";
import "bootstrap/dist/css/bootstrap.css";

function UserList({data, handleEdit, handleDeleteUser}) {
  return (
    <div>
      <h2>User List</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.getUsers.map((user) => (
            <UserData
              user={user}
              handleEdit={handleEdit}
              handleDeleteUser={handleDeleteUser}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
