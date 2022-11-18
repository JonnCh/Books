'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Student,
        { through: models.StudentBook, foreignKey: "bookId" });
    }
  }
  Book.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    numberOfPages: DataTypes.INTEGER,
    publishedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};