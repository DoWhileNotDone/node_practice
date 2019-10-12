module.exports = {
  "development": {
    "username": "express",
    "password": "password",
    "database": "express",
    "port": 5432,
    "host": "127.0.0.1",
    "dialect": "postgres",
    "quoteIdentifiers": false
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
