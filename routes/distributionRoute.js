const express = require("express");

const router = express.Router();

const {add, edit, one} = require("../controllers/distributionController");

router.post('/add', add);

router.post('/edit', edit);

router.post('/:id', one);

module.exports = router;