'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Role, {
        foreignKey: 'userId',
        through: 'userRoles',
        as: 'roles'
      })
      this.belongsToMany(models.Permission, {
        foreignKey: 'userId',
        through: 'userPermissions',
        as: 'permissions'
      })
      // define association here
    }
  }
  User.init({
    email: {
      type: DataTypes.STRING,
      unique: true,
    validate: {
      isEmail: {
        args: true,
        msg: "E-mail inválido!"
      }
    }},
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  return User;
};