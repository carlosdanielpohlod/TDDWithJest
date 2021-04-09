const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
 module.exports = (sequelize, DataTypes) => {
     const users = sequelize.define("users", {
         name: DataTypes.STRING,
         email: DataTypes.STRING,
         
         password_hash: DataTypes.STRING
     
     })

     users.prototype.checkPassword = function(password){
         return bcrypt.compare(password, this.password_hash)
     }
     users.prototype.generateToken = function(){
         return jwt.signin({id: this.id}, process.env.APP_SECRET)
    }
     return users
 }