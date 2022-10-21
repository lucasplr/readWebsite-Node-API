'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Chapter, {
        foreignKey: 'bookId',
        through: 'bookChapters',
        as: 'book'
      })
      this.belongsToMany(models.Author, {
        foreignKey: 'bookId',
        through: 'authorBooks'
      })
      // define association here
    }
  }
  Book.init({
    name: DataTypes.STRING,
    imgCover: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Book',
    tableName: 'books'
  });
  return Book;
};