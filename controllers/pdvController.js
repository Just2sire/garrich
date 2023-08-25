const PDV = require('../models/pdv');

const all = (req, res) => {
    PDV.findAll().
        then(res => {
            res.json(res);
        }).catch(err => res.status.json({ message: "Erreur lors de la récupération du PDV" }))
}

const add = (req, res) => {

    const data = req.body();
    PDV.create(data).
        then((ok) => {
            res.json({ message: "PDV crée avec succès" })
        }).catch(err => res.status(500).json({ message: "Erreur lors de l'ajout du PDV" }));
};

const edit = (req, res) => {
    const data = req.body();
    PDV.update(data).
        then((ok) => {
            res.json({ message: "PDV modifié avec succès" })
        }).catch(err => res.status(500).json({ message: "Erreur lors de l'ajout du PDV" }));
}

const one = (req, res) => {
    let id = req.params.id;
    PDV.findByPk(id).
        then(res => {
            res.json(res)
        }).catch(err => { res.status(500).json({ message: "Erreur lors de la récupération" }) })
}

module.exports = {
    all,
    add,
    edit,
    one
}