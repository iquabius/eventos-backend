const express = require("express");
const bodyParser = require("body-parser");
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const { makeExecutableSchema } = require("graphql-tools");

const GRAPHQL_PORT = 3000;

// Some fake data
const users = [
  {
    email: "iqb@gmail.com",
    name: "Pafúncio de Souza"
  },
  {
    email: "fsantos@unemat.br",
    name: "Fulano Santos"
  }
];

// The GraphQL schema in string form
const typeDefs = `
  type Query { users: [User] }
  type User { email: String!, name: String }
`;

// The resolvers
const resolvers = {
  Query: { users: () => users }
};

// Put together a schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

// Initialize the app
const app = express();

// The GraphQL endpoint
app.use("/graphql", bodyParser.json(), graphqlExpress({ schema }));

// GraphiQL, a visual editor for queries
app.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));

// Start the server
app.listen(GRAPHQL_PORT, () => {
  console.log(
    `GraphiQL is now running on http://localhost:${GRAPHQL_PORT}/graphiql`
  );
});
