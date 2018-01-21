const knex = require("./sql/connector");

// The resolvers
module.exports = {
  Query: { users: () => knex.select().table('users').then(rows => (rows || [])) }
};
