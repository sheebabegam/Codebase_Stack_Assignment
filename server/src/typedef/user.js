let gql = require('graphql-tag');

const User = gql`

    type User {
        id: ID!
        name: String!
        email: String!
        password: String
    }
  
    type Status {
        status: String
        message: String
    
    }

    type Status_Err {
        status: Int
        message: String
    }

    type Token {
        message: String
        token : String
    }

    type Message {
        message: String!
    }

    input LoginCredentials {
        email: String
        password: String
    }

    input CreateUserInput {
        name: String!
        email: String!
        password: String!
    }
    input UserUpdate {
        name: String
        email: String
    }

    type Query{
        getUsers: [User!]!
        getUserById(id:ID!):User!

    }

    type Mutation {
        createUser(input: CreateUserInput!): User!
        updateUser(id:ID!, input: UserUpdate):User!
        deleteUser(id:ID!):Status!
        login(input:LoginCredentials): Token
    }
`
module.exports = User;