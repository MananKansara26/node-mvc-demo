const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  poster: { type: String },
  fullplot: { type: String },
  genres: { type: [String] },
  cast: { type: [String] },
  runtime: { type: Number },
  title: { type: String },
  languages: { type: [String] },
  released: { type: Date },
  directors: { type: [String] },
  rated: { type: String },
  imdb: {
    rating: { type: Number },
    votes: { type: Number },
    id: { type: Number },
  },
  countries: { type: [String] },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
