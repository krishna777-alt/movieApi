import express from "express";
import { createMovie, getMovies } from "../Controllers/movieController.js";

const router = express.Router();

router.post("/createMovie", createMovie);
router.get("/getMovies", getMovies);
export default router;
