const express = require("express");

const router = express.Router();

const { all, add, one } = require("../controllers/commissionController");

router.get('/all', all);

router.post('/add', add);

router.get('/:id', one);

module.exports = router;