'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserToken extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'userId'
      })
      // define association here
    }
  }
  UserToken.init({
    refreshToken: {
      type: DataTypes.STRING
    },
    expiresDate: {
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'UserToken',
    tableName: 'userTokens'
  });
  return UserToken;
};