import express from "express";

import movieRouter from "./Routes/movieRoutes.js";

const app = express();

app.use(express.json());

app.use("/api/v1/movies", movieRouter);
// app.use("/api/v1/trailers");
console.log("hello wotld");
export default app;
