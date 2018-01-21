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

// The resolvers
module.exports = {
  Query: { users: () => users }
};
