'use strict';
const { User, Product, sequelize } = require('../models');
const falso = require('@ngneat/falso');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let bodyContent = falso.randQuote({length: 3}).join(' ')
    const productReviews = await Promise.all(
      [...Array(25)].map(async () => {
        let reviewer = await User.findOne({ order: sequelize.random(), raw: true });
        let product = await Product.findOne({
          order: sequelize.random(),
          raw: true
        });
        return {
          rating: Math.floor((Math.random() * 5) + 1),
          title: falso.randCatchPhrase(),
          body: bodyContent,
          reviewer_id: reviewer.id,
          product_id: product.id,
          createdAt: new Date(),
          updatedAt: new Date()
        };
      })
    );
    return queryInterface.bulkInsert('product_reviews', productReviews);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('product_reviews');
  }
};