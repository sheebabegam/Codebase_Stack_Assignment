# Codebase Stack Assignment

This is a React application for managing user data. It includes the following features:

1. A React component that displays a list of user names and email addresses. The component receives an array of user objects as a prop.
2. Each user component has a ref attached to it, and clicking on a user element logs the ref to the console.
3. A multi-step form in React that allows users to add a new user to the list. The form captures user information in two steps and allows users to go back and forth between the steps. The form includes fields for name, email, and password.

## Prerequisites

Before running this application, make sure you have the following installed:

- Node.js
- React

## Installation

1. Clone the repository:

```
git clone https://github.com/your-repo.git
```

2. Navigate to the project directory:

```
cd project-directory
```

3. Install the dependencies:

```
npm install
```

## Usage

To start the application, run the following command in the project directory:

```
npm start
```

This will start the development server and open the application in your default browser.

## Features

### 1. UserList Component

This component displays a list of user names and email addresses. It receives an array of user objects as a prop.

### 2. UserListWithRef Component

This component extends the `UserList` component and adds a ref to each user element. Clicking on a user element will log the ref to the console.

### 3. AddUserForm Component

This component represents a multi-step form for adding a new user to the list. The form captures information in two steps and allows users to go back and forth between the steps. It includes fields for name, email, and password.

## Code Example

Here's an example of how to use the components in your React application:

```jsx
import React, { useState, useEffect } from "react";
import { useMutation, useQuery, gql } from "@apollo/client";
import "bootstrap/dist/css/bootstrap.css";
import AddUserForm from "./pages/AddUserForm";
import UpdateUserForm from "./pages/UpdateUserForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ADD_USER_MUTATION, GET_USERS_QUERY, DELETE_USER_MUTATION } from './queries/userQuery'
import UserList from "./sections/UserList";

const App = () => {
  // Add your component code here...
};

export default App;
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
