import { configDotenv } from "dotenv";
import { MongoClient } from "mongodb";
import express, { Request, Response } from "express";
const fs = require("fs");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = 4000;
const app = express();
app.use(cors());
app.use(express.json());
configDotenv();

const connectMongoDb = async () => {
  const MONGODB_URI = process.env.MONGODB_URI;
  await mongoose.connect(MONGODB_URI);
};

connectMongoDb();
const FOOD_CATEGORY_SCHEMA = new mongoose.Schema(
  {
    CategoryName: String,
  },
  {
    timestamps: true,
  }
);
const FoodCategoryModel = mongoose.model(
  "FoodCategory",
  FOOD_CATEGORY_SCHEMA,
  "food-category"
);

app.get("/food-category", async (req: Request, res: Response) => {
  const food = await FoodCategoryModel.find();
  res.json(food);
});

app.post("/food-category", async (req: Request, res: Response) => {
  const newItem = await FoodCategoryModel.create({
    CategoryName: req.body.CategoryName,
  });
  res.json({ message: "new food created succesfully", newItem });
});

app.delete("/food-category/:id", async (req: Request, res: Response) => {
  const deleteFood = await FoodCategoryModel.findByIdAndDelete();
  res.json({ message: "food deleted", deleteFood });
});

app.put("/food-category/:id", async (req: Request, res: Response) => {
  const updateId = req.params.id;
  const foodUpdate = await FoodCategoryModel.findByIdAndUpdate(
    updateId,
    {
      CategoryName: req.body.CategoryName,
    },
    { new: true }
  );
  res.json(foodUpdate);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
