/* Dotenv config */

const dotenv = require('dotenv');
dotenv.config();
const { SERVER_PORT } = process.env;

/* Sequelize */

const sequelize = require('./database/db.config');

const Distributeur = require('./models/distributeur');

// const Distribution = require('./models/distribution');

// const Commission = require("./models/commission");

// const PDV = require("./models/pdv");

/* Express configs */

const express = require('express');

const app = express();

app.use(express.json());

app.use(express.static('public'));

app.listen(SERVER_PORT, () => {
    sequelize.authenticate()
        .then(() => {

            /* Importer vos models puis décommenter les trois lignes en bas pour créer vos tables dans la base de données */

            // sequelize.sync(/*{force: true}*/)
            // sequelize.sync()
            //     .then(() => console.log("DB seed successfully"))
            //     .catch(err => console.log(err.message));


            console.log("Connecté à la DB ");
        })
        .catch((err) => console.log("Erreur lors de la connexion à la DB:" + err.message));
    console.log(`L'application tourne sur le port ${SERVER_PORT}`);
})

/* Route config */

const authRoute = require('./routes/authRoute');
const distributionRoute = require('./routes/distributionRoute');
const pdvRoute = require('./routes/pdvRoute');
const commissionRoute = require('./routes/commissionRoute');
const contratAssuranceRoute = require('./routes/contratAssuranceRoute');

app.use('/auth', authRoute);
app.use('/distribution', distributionRoute);
app.use('/pdv', pdvRoute);
app.use('/commission', commissionRoute);
app.use('/contratAssurance', contratAssuranceRoute);

/* CORS config */

const cors = require('cors');

app.use(cors({
    // origin: "http://localhost:3000",
    origin: "*",
    credentials: true
}));

/* All routes */

const allRoutes = require('express-list-endpoints');

//Décommenter la ligne suivante pour avoir toutes vos routes dans le terminal

// console.log(allRoutes(app));