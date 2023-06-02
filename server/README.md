
# CODEBASE STACK ASSIGNMENT

This repository contains a GraphQL server implemented with Apollo Server and Express. It offers user-related functionalities such as creating, updating, and deleting users, as well as user authentication. Additionally, an Express endpoint at /hello returns "Hello, world!" and the sum of even numbers, while logging a message every second.


## API Reference

#### Print Hello World

```http
  GET /hello
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Hello World` | `string` | **Required**. Enter any String |


#### Add Even Numbers in the Array

Takes some of numbers in the array and returns the sum of even numbers.


#### Automatically put a message in console

It show "QUERY RUNNING" each 5 secs in console

## Graphql Query Reference

#### Create User

This mutation allows creating a new user by providing the required input fields such as name, email, and password.

#### Delete User

This mutation allows deleting a user by their unique identifier (ID).


#### Update User

This mutation allows updating the details of a user, such as their name, email, or password, by providing the user's ID and the updated input.


#### Login 

This mutation enables user authentication by validating the provided credentials (email and password).

#### Get All Users

This query returns a list of all users stored in the database.

#### Get User

This query retrieves a specific user's details based on their ID.

## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server - React

```bash
  npm run start 
```


Start the server - Express

```bash
  npm run start 
```

Start the server - Graphql with MongoDB

```bash
  npm run dev 
```


## Running Tests

To run tests, run the following command

```bash
  npm run test
```


## Tech Stack

**Client:** React

**Server:** Node, Express, Graphql

