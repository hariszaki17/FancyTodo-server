require('dotenv').config()

module.exports = {
  // "development": {
  //   "username": "postgres",
  //   "password": "StrongAdminP@ssw0rd",
  //   "database": "db_todo",
  //   "host": "127.0.0.1",
  //   "dialect": "postgres"
  // },
  "production": {
    "username": process.env.DATABASE_USER,
    "password": process.env.DATABASE_PASSWORD,
    "database": process.env.DATABASE_NAME,
    "host": process.env.DATABASE_HOST,
    "dialect": "postgres"
  }
}
