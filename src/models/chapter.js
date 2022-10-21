'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chapter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Book, {
        foreignKey: 'chapterId',
        through: 'bookChapters',
        as: 'chapters'
      })
      // define association here
    }
  }
  Chapter.init({
    name: DataTypes.STRING,
    content: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Chapter',
    tableName: 'chapters'
  });
  return Chapter;
};