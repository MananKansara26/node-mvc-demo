const Movie = require("../models/movie");

const getMovies = async (req, res, next) => {
  const page = req.query?.page > 1 ? req.query?.page : 1;
  const limit = 8;
  const skip = (page - 1) * limit;

  const searchConditions = { poster: { $exists: true } };
  const movies = await Movie.find(searchConditions, {
    title: 1,
    poster: 1,
    genres: 1,
  })
    .sort({ released: -1 })
    .limit(8)
    .skip(skip)
    .limit(limit)
    .allowDiskUse(true);
  const recordCount = await Movie.countDocuments(searchConditions);
  return res.render("home", { movies, recordCount });
};

const getMovieById = async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  res.render("movie", { movie });
};

module.exports.getMovies = getMovies;
module.exports.getMovieById = getMovieById;
