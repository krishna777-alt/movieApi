import express from "express";
import { createMovie } from "../Controllers/movieController.js";

const router = express.Router();

router.post("/createMovie", createMovie);

export default router;
