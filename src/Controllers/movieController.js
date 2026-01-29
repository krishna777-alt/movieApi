import Movie from "../Models/movieModel.js";
import AppError from "../utils/AppError.js";

export const createMovie = async function (req, res) {
  try {
    const { title, description, genre, releaseYear } = req.body;
    const movie = await Movie.create({
      title,
      description,
      genre,
      releaseYear,
    });
    res.status(201).json({ message: "success", movie });
  } catch (err) {
    res.status(501).json({ status: 501, message: "Somthing went wrong" });
  }
};

export const getMovies = async function (req, res) {
  const {
    search,
    genre,
    year,
    sort = "-createdAt",
    page = 1,
    limit = 10,
  } = req.query;

  const filter = {};
  if (search) {
    filter.title = { $regex: search, $options: "i" };
  }
  if (year) {
    filter.releaseYear = Number(year);
  }
  if (genre) {
    filter.genre = genre;
  }

  const skip = (page - 1) * limit;

  const movies = await Movie.find(filter)
    .sort(sort)
    .skip(skip)
    .limit(Number(limit));

  const total = await Movie.countDocuments(filter);

  if (!movies.length) {
    throw new AppError("No movies found!", 404);
  }
  res.status(200).json({
    status: 200,
    total,
    page: Number(page),
    limit: Number(limit),
    results: movies.length,
    data: movies,
  });
};
