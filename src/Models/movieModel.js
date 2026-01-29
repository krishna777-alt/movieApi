import mongoose, { Schema } from "mongoose";

const movieSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    genre: [String],
    releaseYear: Number,
    poster: {
      type: String,
      default: "no poster",
    },
  },
  {
    timestamps: true,
  },
);

const trailerSchema = new Schema({
  movie: {
    type: String,
    default: "unknown",
  },
  url: {
    type: String,
    default: "empty URL",
  },
  quality: {
    type: String,
    default: "HD",
    enum: ["4K", "HD", "1080p", "720"],
  },
  movieId: {
    type: Schema.ObjectId,
    ref: "Movie",
    required: true,
    index: true,
  },
});

const Movie = mongoose.model("Movie", movieSchema);
const Trailer = mongoose.model("Trailer", trailerSchema);
export default { Movie, Trailer };
