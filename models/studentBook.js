'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StudentBook extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
    }
  }
  StudentBook.init({
    studentId: {
      type: DataTypes.INTEGER,
      references: {
        model: sequelize.models.Student,
        key: 'id'
      }
    },
    bookId: {
      type: DataTypes.INTEGER,
      references: {
        model: sequelize.models.Book,
        key: 'id'
      }
    },
  }, {
    sequelize,
    modelName: 'StudentBook',
  });
  return StudentBook;
};