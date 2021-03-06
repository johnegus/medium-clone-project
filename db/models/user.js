'use strict';
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      fullName: {
        type: DataTypes.STRING(55),
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING(40),
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING(55),
        allowNull: false,
        unique: true,
      },
      hashedPassword: {
        type: DataTypes.STRING.BINARY,
        allowNull: false,
      },
      githubUrl: {
          type: DataTypes.STRING(500)
      },
      linkedinUrl: {
          type: DataTypes.STRING(500)
      },
      picUrl: {
          type: DataTypes.STRING(500),
      },
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Bookmark, {foreignKey: "userId"});
    User.hasMany(models.Story, {foreignKey: "userId"});
    User.hasMany(models.Clap, {foreignKey: "userId"});
    User.hasMany(models.Response, {foreignKey: "userId"});
    const columnMappingFollowee = {
        through: "Followers",
        as: "followers",
        otherKey: "followerId",
        foreignKey: "followeeId"
    }
    User.belongsToMany(models.User, columnMappingFollowee);
    const columnMappingFollower = {
        through: "Followers",
        as: "followees",
        otherKey: "followeeId",
        foreignKey: "followerId"
    }
    User.belongsToMany(models.User, columnMappingFollower);
  };
  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  }
  return User;
};
