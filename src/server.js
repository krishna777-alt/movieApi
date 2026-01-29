import mongoose from "mongoose";
import app from "./app.js";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);

dotenv.config({
  path: path.join(__dirname, "../.env"),
});
// dotenv.config(path.join(__dirname, ".env"));

const PORT = process.env.PORT || 3000;
const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.PASSWORD);

mongoose
  .connect(DB)
  .then(() => console.log("DataBase Connected successfully!"))
  .catch((err) => console.log(`Failed to connect DB ,ERROR:${err}`));

app.listen(PORT, () => {
  console.log(`Serevr runing on port:${PORT}`);
});
