'use strict';
require('dotenv').config()

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          username: 'austintaylor',
          email: '1@mail.com',
          password: 'password',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: 'oldgreg',
          email: '2@mail.com',
          password: 'password',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: 'stevemartin',
          email: '3@mail.com',
          password: 'password',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: 'hulkhogan',
          email: '4@mail.com',
          password: 'password',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: 'rogerrabbit',
          email: '5@mail.com',
          password: 'password',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {})
  }
};
