const PDV = require('../models/pdv');

const add = (req, res) => {

    const data = req.body();
    PDV.create(data).
    then((ok) => {
        res.json({ message: "Distribution crée avec succès" })
    }).catch(err => res.status(500).json({ message: "Erreur lors de l'ajout de la distribution" }));
}

module.exports = {
    add
}