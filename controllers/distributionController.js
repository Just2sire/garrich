const Distribution = require('../models/distribution');

const add = (req, res) => {
    const data = req.body();
    Distribution.create(data).
        then((ok) => {
            res.json({ message: "Distribution crée avec succès" })
        }).catch(err => res.status(500).json({ message: "Erreur lors de l'ajout de la distribution" }));
};

const edit = (req, res) => {
    let id = req.params.id;
    const data = req.body();
    Distribution.update(
        data, { where: { id: id }  }// L'ID de l'entrée que vous voulez mettre à jour
    ).then((ok) => res.json({message: "La distribution a été modifié avec succès"}));
}

const one = (req, res) => {
    let id = req.params.id;
    Distribution.findByPk(id).
    then(res => {
        res.json(res)
    }).catch(err => {res.status(500).json({message: "Erreur lors de la récupération"})})
}

module.exports = {
    add,
    edit,
    one
}