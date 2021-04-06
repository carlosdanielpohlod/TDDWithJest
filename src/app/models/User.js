 const bcrypt = require('bcryptjs')
const { password } = require('../../config/database')
 
 module.exports = (sequelize, DataTypes) => {
     const users = sequelize.define("users", {
         name: DataTypes.STRING,
         email: DataTypes.STRING,
         password: DataTypes.VIRTUAL,
         password_hash: DataTypes.STRING
     }, {
         hooks: {
             beforeSave: async user => {
                if(user.password){
                    user.password_hash = bcrypt.hash(user.password)
                }
             }
         }
     })

     users.prototype.checkPassword = function(password){
         return bcrypt.compare(password, this.password_hash)
     }
     return users
 }