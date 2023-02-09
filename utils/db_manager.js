const { Pool } = require('pg');

// eslint-disable-next-line
const { config } = require('../conf/config');

const pgPool = new Pool({
  user: config.database.username,
  host: config.database.host,
  database: config.database.database,
  password: config.database.password,
  port: config.database.port,
});

module.exports = {
  query: async (text, params, callback) => {
    try {
      // main db query excucation
      return await pgPool.query(text, params, callback);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error.message);
      error.params = params;
      error.text = text;
      throw new Error(error.message);
    }
  },
};
