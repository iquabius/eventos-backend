const knex = require("./sql/connector");

// The resolvers
module.exports = {
  Query: {
    user: (_root, { id }, _ctx) =>
      knex("users")
        .where({ id })
        .then(([row]) => row),
    users: () =>
      knex
        .select()
        .table("users")
        .then(rows => rows || [])
  },
  Mutation: {
    createUser: (_root, data, _ctx) =>
      knex('users')
        .insert(data)
        .then(([id]) => Object.assign({ id }, data))
  }
};
