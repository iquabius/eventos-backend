const path = require("path");

const migrations = {
  directory: path.resolve(__dirname, 'database', 'migrations')
};

const seeds = {
  directory: path.resolve(__dirname, 'database', 'seeds')
};

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/dev.sqlite3',
    },
    debug: true,
    useNullAsDefault: true,
    migrations,
    seeds
  },
  test: {
    client: 'sqlite3',
    connection: {
      filename: './database/test.sqlite3',
    },
    useNullAsDefault: true,
    migrations,
    seeds
  }
};
