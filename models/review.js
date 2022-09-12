'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Review.belongsTo(models.User, {
        foreignKey: 'reviewer_id',
        as: 'reviews_posted',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Review.belongsTo(models.User, {
        foreignKey: 'reviewee_id',
        as: 'reviews_recieved',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Review.init({
    reviewer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'reviewer_id',
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
    },
    reviewee_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'reviewee_id',
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Review',
    tableName: 'reviews',
  });
  return Review;
};