'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.createTable('users', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email:{
      type: Sequelize.STRING,
      unique: true, 
      allowNull: false
    },
    password_hash:{
      type: Sequelize.STRING,
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    update_at:{
      type: Sequelize.DATE,
      allowNull: true
    }
   })
  },

  down: async (queryInterface, Sequelize) => {
  
     return  await queryInterface.dropTable('users');
     
  }
};
