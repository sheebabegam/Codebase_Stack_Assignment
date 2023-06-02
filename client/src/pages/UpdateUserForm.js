import { UPDATE_USER_MUTATION, GET_USER_BY_ID_QUERY } from '../queries/userQuery';
import React from 'react';
import { useMutation } from '@apollo/client';
import { useQuery } from '@apollo/client';
import 'bootstrap/dist/css/bootstrap.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Input from '../components/Input';
import Button from '../components/Button';




const UpdateUserForm = ({ userId }) => {
  const [updateUser, { loading, error }] = useMutation(UPDATE_USER_MUTATION);

  const { data, refetch } = useQuery(GET_USER_BY_ID_QUERY, {
    variables: {
      getUserByIdId: userId,
    },
    onError: (error) => {
      console.error('Error retrieving user:', error);
    },
  });

  const user = data?.getUserById;

  if (!user) {
    return <div>No user found with ID: {userId}</div>;
  }

  const handleUpdateUser = async (event) => {
    event.preventDefault();
    const updateUserId = userId;
    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;

    try {
      const { data } = await updateUser({
        variables: {
          updateUserId,
          input: { name, email },
        },
      });
      toast.success('User Updated Successfully');
      console.log('Updated User:', data.updateUser);
      refetch();
    } catch (error) {
      console.error('Error updating user:', error);
      toast.error('Cannot update the User');
    }
  };

  return (
    <div className="container" style={{ marginTop: 100 }}>
      <ToastContainer />
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Update User</h2>
              <form onSubmit={handleUpdateUser}>
                <Input
                  label="Name"
                  type="text"
                  id="name"
                  name="name"
                  defaultValue={user?.name}
                  placeholder="Name"
                  required
                />
                <Input
                  label="Email"
                  type="email"
                  id="email"
                  name="email"
                  defaultValue={user?.email}
                  placeholder="Email"
                  required
                />
                <Button type="submit" label="Update User" disabled={loading} />
                {error && <p className="text-danger mt-3">Error: {error.message}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateUserForm;
