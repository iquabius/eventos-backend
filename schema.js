const { makeExecutableSchema } = require("graphql-tools");
const resolvers = require("./resolvers");

// The GraphQL schema in string form
const typeDefs = `
  type Query { users: [User] }
  type User { email: String!, name: String }
`;

// Put together a schema
module.exports = makeExecutableSchema({
  typeDefs,
  resolvers
});
