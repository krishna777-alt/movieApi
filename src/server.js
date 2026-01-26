import mongoose from "mongoose";
import app from "./app.js";
import dotenv from "dotenv";
import path from "path";

dotenv.config("./../.env");
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
