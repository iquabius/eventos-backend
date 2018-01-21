
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          email: "iqb@gmail.com",
          name: "Pafúncio de Souza"
        },
        {
          email: "fsantos@unemat.br",
          name: "Fulano Santos"
        }
      ]);
    });
};
