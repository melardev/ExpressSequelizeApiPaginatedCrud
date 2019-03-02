'use strict';
module.exports = (sequelize, DataTypes) => {
  const Todoa = sequelize.define('Todoa', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    completed: DataTypes.BOOLEAN
  }, {});
  Todoa.associate = function(models) {
    // associations can be defined here
  };
  return Todoa;
};