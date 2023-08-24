const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../database/db.config');

const bcrypt = require('bcrypt');

const Commission = require('./commission');
const Distribution = require('./distribution');
const PDV = require('./pdv');
const ContratAssurance = require('./contratAssurance');

const saltRounds = 10;


const Distributeur = sequelize.define('distributeur', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    prenom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    numPhone: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    photo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dateNaiss: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    adresse: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ville: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pays: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { timestamps: true });

// hash password with bcrypt
Distributeur.beforeCreate((distributeur, options) => {
    return bcrypt.hash(distributeur.password, saltRounds)
        .then(password => {
            distributeur.password = password;
        })
        .catch(err => {
            console.log(err)
            throw new Error();
        });
});

// prototype method for all users to check password
Distributeur.prototype.authenticate = async function (value, callback) {
    await bcrypt.compare(value, this.password, (err, same) => {
        if (err){
            console.log(err)
            callback(err)
        }else{
            console.log('authenticate', err, same)
            callback(err, same)
        }
    })
};

Distributeur.hasMany(Commission ,{
    foreignKey: 'distributeurId',
    targetKey: 'id',
  });
// Distributeur.hasMany(Commission);
Distributeur.hasMany(Distribution ,{
    foreignKey: 'distributeurId',
    targetKey: 'id',
  });
Distributeur.hasMany(PDV ,{
    foreignKey: 'distributeurId',
    targetKey: 'id',
  });
Distributeur.hasMany(ContratAssurance ,{
    foreignKey: 'distributeurId',
    targetKey: 'id',
  });

module.exports = Distributeur;