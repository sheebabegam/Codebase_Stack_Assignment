import { gql } from "@apollo/client";


export const ADD_USER_MUTATION = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      name
      email
      password
    }
  }
`;

export const GET_USERS_QUERY = gql`
  query {
    getUsers {
      id
      name
      email
      password
    }
  }
`;

export const DELETE_USER_MUTATION = gql`
  mutation DeleteUser($deleteUserId: ID!) {
    deleteUser(id: $deleteUserId) {
      status
      message
    }
  }
`;

export const GET_USER_BY_ID_QUERY = gql`
  query GetUserById($getUserByIdId: ID!) {
    getUserById(id: $getUserByIdId) {
      id
      name
      email
      password
    }
  }
`;

export const UPDATE_USER_MUTATION = gql`
  mutation UpdateUser($updateUserId: ID!, $input: UserUpdate) {
    updateUser(id: $updateUserId, input: $input) {
      id
      name
      email
      password
    }
  }
`;