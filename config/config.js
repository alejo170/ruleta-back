require('dotenv').config()
module.exports = {
  'development': {
    username: process.env.DB_USERNAME || "sql10461839",
    password: process.env.DB_PASSWORD || "JzBvsIEHa7",
    database: process.env.DB_DATABASE || "sql10461839",
    host: process.env.DB_HOST || "sql10.freesqldatabase.com",
    dialect: process.env.DB_DIALECT || "mysql",
  }
 
}