 module.exports = (sequelize, DataTypes) => {
     const users = sequelize.define("users", {
         name: DataTypes.STRING,
         email: DataTypes.STRING,
         password_hash: DataTypes.STRING
     })
     return users
 }