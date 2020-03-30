'use strict';
module.exports = (sequelize, DataTypes) => {
  class Task extends sequelize.Sequelize.Model {
    get id() {
      return this.id
    }
    get title() {
      return this.title
    }
    get description() {
      return this.description
    }
    get status() {
      return this.status
    }
    get due_date() {
      return this.due_date
    }
  }
 
  Task.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.STRING,
    due_date: {
      type: DataTypes.DATE,
      validate: {
        checkDate() {
          if (this.due_date < new Date()) {
            throw new Error('Date must be future time.')
          }
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Task'
  })
  Task.associate = function(models) {
    // associations can be defined here
  };
  return Task;
};