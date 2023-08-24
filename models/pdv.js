const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../database/db.config");

const PDV = sequelize.define(
  "pdv",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    codePDV: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nomPDV: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    adresse: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    longitude: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    latitude: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    telephone: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [8,20]
      }
    },
    rccm: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [8,20]
      }
    },
    carteOperEco: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [8,20]
      }
    }
  },
  { timestamps: true }
);

module.exports = PDV;
