import React, { useState, useEffect } from "react";
import { useMutation, useQuery, gql } from "@apollo/client";
import "bootstrap/dist/css/bootstrap.css";
import AddUserForm from "./pages/AddUserForm";
import UpdateUserForm from "./pages/UpdateUserForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {ADD_USER_MUTATION, GET_USERS_QUERY, DELETE_USER_MUTATION} from './queries/userQuery'
import UserList from "./sections/UserList";



const App = () => {
  const { loading, error, data, refetch } = useQuery(GET_USERS_QUERY);
  const [userClick, setUserClick] = useState("add");
  const [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    refetchData();
  }, []);

  const refetchData = () => {
    refetch()
      .then(() => {})
      .catch((error) => {
        console.error("Error refetching data:", error);
      });
  };

  const [addUser] = useMutation(ADD_USER_MUTATION, {
    update: (cache, { data: { createUser } }) => {
      cache.modify({
        fields: {
          getUsers(existingUsers = []) {
            const newUserRef = cache.writeFragment({
              data: createUser,
              fragment: gql`
                fragment NewUser on User {
                  id
                  name
                  email
                  password
                }
              `,
            });
            return [...existingUsers, newUserRef];
          },
        },
      });
    },
  });

  const handleAddUser = (name, email, password) => {
    addUser({
      variables: { input: { name, email, password } },
    })
      .then((response) => {
        toast.success("User Added Succuessfully");
      })
      .catch((error) => {
        toast.error("User Already Exist");
      });
  };

  const handleUserAdd = () => {
    setUserClick("add");
  };

  const handleEdit = (userId) => {
    setSelectedUserId(userId);
    setUserClick("edit");
  };

  const [deleteUser] = useMutation(DELETE_USER_MUTATION, {
    onCompleted: () => {
      refetch();
    },
  });

  const handleDeleteUser = (userId) => {
    deleteUser({
      variables: { deleteUserId: userId },
    })
      .then((response) => {
        toast.success("User Deleted Succuessfully");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container">
      <ToastContainer />
      <div style={{ marginTop: "30px" }}>
        {userClick === "add" ? (
          ""
        ) : (
          <button className="btn btn-success" onClick={() => handleUserAdd()}>
            Add User
          </button>
        )}
      </div>
      {userClick === "add" ? (
        <AddUserForm onAddUser={handleAddUser} />
      ) : (
        <UpdateUserForm userId={selectedUserId} />
      )}

      <UserList
        data={data}
        handleEdit={handleEdit}
        handleDeleteUser={handleDeleteUser}
      />
    </div>
  );
};

export default App;
