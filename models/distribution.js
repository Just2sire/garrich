const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../database/db.config");
const PDV = require("./pdv");

const Distribution = sequelize.define(
  "distribution",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    dateDistribution: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    montant: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [3,20]
      }
    },
    dateHeureDepart: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isDate: true
      }
    },
  },
  { timestamps: true }
);

Distribution.hasOne(PDV, {
    foreignKey: 'pdvId',

})

module.exports = Distribution;
