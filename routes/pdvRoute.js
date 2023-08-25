const express = require("express");

const router = express.Router();

const { all, add, edit, one } = require('../controllers/pdvController');

router.get('/all', all);

router.post('/add', add);

router.get('/:id', one);

router.post('/edit', edit);

module.exports = router;