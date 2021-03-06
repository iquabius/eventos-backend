const { makeExecutableSchema } = require("graphql-tools");
const resolvers = require("./resolvers");

// The GraphQL schema in string form
const typeDefs = `
  type Query {
    getUser(id: ID!): User
    allUsers: [User]
  }

  type Mutation {
    createUser(name: String, email: String!, password: String!): User
  }

  type User {
    id: ID!,
    email: String!,
    name: String,
    password: String!,
  }
`;

// Put together a schema
module.exports = makeExecutableSchema({
  typeDefs,
  resolvers
});
