const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../database/db.config");

const Commission = sequelize.define(
  "commission",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    commission: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    periode: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ChiffreAffaire: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  { timestamps: true }
);

module.exports = Commission;
