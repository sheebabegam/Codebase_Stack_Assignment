const express = require("express")

const { ApolloServer } = require('apollo-server-express');

const mongoose = require('mongoose');

const mergedTypeDefs = require('./src/typedef/index');

const resolverMutaion = require('./src/mutation/index');

const resolverQuery = require('./src/query/index');

const User = require('./src/model/userSchema')

let resolvers = {

  Query: { ...resolverQuery },

  Mutation: { ...resolverMutaion },
  
}

mongoose.connect('mongodb://localhost:27017/testdb')

  .then(() => console.log("DB Connected Successfully"))

  .catch(error => console.log(error.message));

mongoose.Promise = global.Promise;

const setHttpPlugin = {

  async requestDidStart() {
    return {
      async willSendResponse({ response }) {
        const error = response.errors?.[0];

        if (error && error.extensions?.http?.status) {
          response.http.status = error.extensions.http.status;
        }
      },
    };
  },
};

async function startServer() {

  const server = new ApolloServer({

    typeDefs: mergedTypeDefs,
    resolvers,
    context: ({ req }) => {
      return { token: req.headers.authorization };
    },
    plugins: [setHttpPlugin],

  });

  await server.start();

  const app = express();

  server.applyMiddleware({ app });

  app.listen({ port: 3001 }, () => {
    console.log(`Server started on http://localhost:3001${server.graphqlPath}`);
  });
}

startServer().catch((err) => {
  console.error('Error starting server:', err);
});