const ContratAssurance = require("../models/contratAssurance");

const add = (req, res) => {

    const data = req.body;
    ContratAssurance.create(data)
    .then((ok) => {
            res.json({ message: "Contrat d'assurance crée avec succès" })
        }).catch(err => res.status(500).json({ message: "Erreur lors de l'ajout du PDV" }));
};

const edit = (req, res) => {
    const data = req.body;
    const { id } = req.params;
    ContratAssurance.update(
        data, { where: { id: id }  }// L'ID de l'entrée que vous voulez mettre à jour
    ).then((ok) => res.json({message: "La distribution a été modifié avec succès"}));
};

const one = (req, res) => {
    const { id } = req.params;
    ContratAssurance.findByPk(id)
    .then((ans) => {
        res.json(ans);
    }).catch(err => res.status(500).json({message: "Erreur lors de la récupération de la commission"}));
}

module.exports = {
    add,
    edit,
    one
}