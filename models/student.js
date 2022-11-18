'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Book,
        { through: models.StudentBook, foreignKey: "studentId" });
    }
  }
  Student.init({
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    dateOfBirth: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};