import Movie from "../Models/movieModel.js";

export const createMovie = async function (req, res) {
  const movie = await Movie.create(req.body);
  res.status(201).json({ message: "success", movie });
};
