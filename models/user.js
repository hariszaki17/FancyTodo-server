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
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      notEmpty: true
    }
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
    User.hasMany(models.Task, { foreignKey: 'userId' })
  };
  return User;
};