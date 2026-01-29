import { Router } from "express";
import { createTrailer } from "../Controllers/trailerController";

const router = Router();

router.route("/").post(createTrailer);
