require('dotenv').config({
  path: process.env.NODE_ENV = '.env'
  })

module.exports = {
  
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT || "mysql",
    storage:'./__tests__/database.sqlite',
    logging: false,
    define:{
      timestamps: false
      
    }
  
}
