const express = require("express");

const router = express.Router();

const { add, edit, one } = require('../controllers/contratAssuranceController');

router.post('/add', add);

router.post('/edit', edit);

router.get('/:id', one);

module.exports = router;