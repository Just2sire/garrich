const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../database/db.config");

const ContratAssurance = sequelize.define(
    "contratAssurance",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        type: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        numAssurance: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        numPolice: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        assurance: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        assureur: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    { timestamps: true }
);



module.exports = ContratAssurance;
