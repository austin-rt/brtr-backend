'use strict';
const { User, sequelize } = require('../models');
const falso = require('@ngneat/falso');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let bodyContent = falso.randQuote({length: 3}).join(' ')
    const reviews = await Promise.all(
      [...Array(25)].map(async () => {
        let reviewer = await User.findOne({ order: sequelize.random(), raw: true });
        let reviewee = await User.findOne({ order: sequelize.random(), raw: true });
        return {
          rating: Math.floor((Math.random() * 5) + 1),
          title: falso.randCatchPhrase(),
          body: bodyContent,
          reviewer_id: reviewer.id,
          reviewee_id: reviewee.id,
          createdAt: new Date(),
          updatedAt: new Date()
        };
      })
    );
    return queryInterface.bulkInsert('user_reviews', reviews);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user_reviews');
  }
};