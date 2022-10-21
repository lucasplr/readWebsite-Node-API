'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Book, {
        foreignKey: 'authorId',
        through: 'authorBooks',
        as: 'authorbooks'
      })
      // define association here
    }
  }
  Author.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Author',
    tableName: 'authors'
  });
  return Author;
};