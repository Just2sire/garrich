const Commission = require('../models/commission');

const all = (req, res) => {
    Commission.findAll()
    .then(ans => res.json(ans))
    .catch(err => res.status.json({message: "Erreur lors de la récupération des commissions"}))
};

const add = (req, res) => {
    const data = req.body;
    Commission.create(data)
    .then(ans => {res.json({message: "Commission crée avec succès"})})
    .catch(err => res.status.json({message: "Erreur lors de l'ajout de la commission"}))
}

const one = (req, res) => {
    const { id } = req.params;
    Commission.findByPk(id)
    .then((ans) => {
        res.json(ans);
    }).catch(err => res.status(500).json({message: "Erreur lors de la récupération de la commission"}));
}

module.exports = {
    all,
    add,
    one
}
