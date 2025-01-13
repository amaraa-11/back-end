import { configDotenv } from "dotenv";
import { MongoClient } from "mongodb";
import express, { Request, Response } from "express";
const mongoose = require("mongoose");
const PORT = 4000;
const app = express();
app.use(express.json());
configDotenv();

let client = null;
const connectMongoDb = async () => {
  const MONGODB_URI = process.env.MONGODB_URI;
  await mongoose.connect(MONGODB_URI);
};
connectMongoDb();

app.get("/", async (req: Request, res: Response) => {
  res.send("Hello from back-end");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
