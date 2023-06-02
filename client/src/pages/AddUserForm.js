import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

const AddUserForm = ({ onAddUser }) => {
  const handleAddUser = (event) => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    onAddUser(name, email, password); 

    event.target.reset();
  };

  return (
    <div className="container" style={{ marginTop: 30 }}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Add User</h2>
              <form onSubmit={handleAddUser}>
                <Input
                  label="Name"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  required
                />
                <Input
                  label="Email"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                />
                <Input
                  label="Password"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  required
                />
                <Button type="submit" label="Add User" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUserForm;
