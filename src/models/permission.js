'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Permission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.User, {
        foreignKey: 'permissionId',
        through: 'userPermissions',
        as: 'users'
      })
      this.belongsToMany(models.Role, {
        foreignKey: 'permissionId',
        through: 'rolePermissions',
        as: 'roles'
      })
      // define association here
    }
  }
  Permission.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Permission',
    tableName: 'permissions'
  });
  return Permission;
};