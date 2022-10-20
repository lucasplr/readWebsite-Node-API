require('dotenv').config()

module.exports = {
    development: {
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.database,
      host: process.env.host,
      dialect: "postgres"
    },
    test: {
      username: process.env.username,
      password: process.env.password,
      database: process.env.database,
      host: process.env.host,
      dialect: "postgres"
    },
    production: {
      username: process.env.username,
      password: process.env.password,
      database: process.env.database,
      host: process.env.host,
      dialect: "postgres"
    }
  }

