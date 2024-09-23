const express = require('express');
const router = express.Router();
const { getMovies, getMovieById } = require('../controllers');

router.get('/', getMovies);
router.get('/movie/:id', getMovieById)

module.exports = router;