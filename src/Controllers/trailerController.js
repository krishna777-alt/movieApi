import { Trailer } from "../Models/movieModel";
import AppError from "../utils/AppError";

export const createTrailer = async function (req, res) {
  const { quality, movie, url } = req.body;
  const trailer = new Trailer({
    quality,
    movie,
    url,
  });

  res
    .status(201)
    .json({ status: 201, message: "Trailer successfully created" });
};

export const getTrailer = async function (req, res) {
  const {
    movieId,
    quality,
    sort = "-createdAt",
    page = 1,
    limit = 10,
    populate = "false",
  } = req.query;

  const filter = {};

  if (movieId) filter.movie = movieId;
  if (quality) filter.quality = quality;

  const skip = (page - 1) * limit;

  let query = Trailer.find(filter).sort(sort).skip(skip).limit(Number(limit));

  if (populate === "true") {
    query = query.populate("movie", "title releaseYear");
  }

  const trailers = await query;
  const total = await Trailer.countDocument(filter);

  if (!trailers.length) {
    throw new AppError("No trailers found!", 404);
  }

  res.json({
    total,
    page: Number(page),
    results: trailers.length,
    data: trailers,
  });
};
