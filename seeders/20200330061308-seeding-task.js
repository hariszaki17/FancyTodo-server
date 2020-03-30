'use strict';

const tasks = [ 
  {
    title: "Learn REST API",
    description: "Learn how to create RESTful API with Express and Sequelize",
    status: "Unfinished",
    due_date: "2020-01-29",
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

module.exports = {
  up: (queryInterface, Sequelize) => {

   return queryInterface.bulkInsert('Tasks', tasks )
  },

  down: (queryInterface, Sequelize) => {

   return queryInterface.bulkDelete('Tasks', null)
  }
};
