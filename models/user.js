'use strict';

const { encryptPassword } = require('../helpers/bcrypt')

module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model {
    get id() {
      return this.id
    }
    get email() {
      return this.email
    }
    get password() {
      return this.password
    }
  }
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    hooks: {
      beforeCreate: (User, options) => {
        User.password = encryptPassword(User.password)
      }
    },
    modelName: 'User'
  })
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};