const Distributeur = require("../models/distributeur");

const register = (req, res, next) => {
    const { nom, email, password } = req.body;
    Distributeur.findOne({
        where: {
            email: email
        }
    })
        .then(user => {
            if (!user) {
                User.create({
                    nom: nom,
                    email: email,
                    password: password
                })
                    .then(response => {
                        res.json(response);
                    })
                    .catch(err => console.log(err));
            } else {
                res.status(500).json({
                    msg: `L'utilisateur ${nom} existe déjà`
                });
            }
        })
        .catch(err => console.log(err));
};

const login = (req, res, next) => {
    const email = req.body.email.toLowerCase();
    const password = req.body.password;
    Distributeur.findOne({
      where: {
        email: email
      }
    })
      .then((user, err) => {
        if (err) {
          console.log(err);
          res.status(500).json({
            error: "Internal error please try again",
            auth: false
          });
        } else if (!user) {
          res.status(401).json({
            error: "User email does not exist",
            auth: false
          });
        } else {
          user.authenticate(password, (err, same) => {
            if (err) {
              res.status(500).json({
                error: "Internal error please try again",
                auth: false
              });
            } else if (!same) {
              res.status(401).json({
                error: "That password is incorrect",
                auth: false
              });
            } else {
              const token = jwt.sign({ id: user.id }, config.secret, { expiresIn: 36000 });
              res.json({
                token: token,
                expiresIn: 36000,
                msg: "Connecté avec succès!",
                user: user,
                error: false,
                auth: true
              });
            }
          });
        }
      })
      .catch(err => console.log(err));
};

module.exports = {
  login,
  register
}