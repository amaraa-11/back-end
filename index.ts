import { configDotenv } from "dotenv";
import { MongoClient } from "mongodb";
import express, { Request, Response } from "express";
const fs = require("fs");
const mongoose = require("mongoose");
const PORT = 5000;
const app = express();
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
    FoodName: String,
    Id: Number,
  },
  {
    Timestamps: true,
  }
);
const FoodCategoryModel = mongoose.model(
  "FoodCategory",
  FOOD_CATEGORY_SCHEMA,
  "food-category"
);
app.post("/food-category/create", async (req: Request, res: Response) => {
  const newItem = await FoodCategoryModel.create(
    {
      CategoryName: req.params.body,
    },
    { new: true }
  );
  res.send({ message: "new food created succesfully", newItem });
});
app.get("/food-category", async (req: Request, res: Response) => {
  const food = await FoodCategoryModel.find();
  res.json(food);
});
app.delete("/food-category/delete/:id", async (req: Request, res: Response) => {
  const deleteFood = await FoodCategoryModel.findByIdAndDelete();

  res.send({ message: "food deleted" });
  res.json(deleteFood);
});
app.put("/food-category/update/:id", async (req: Request, res: Response) => {
  const foodUpdate = await FoodCategoryModel.findByIdAndUpdate(
    {
      CategoryName: req.params.body,
    },
    { new: true }
  );
  res.send("updated");
  res.json(foodUpdate);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
