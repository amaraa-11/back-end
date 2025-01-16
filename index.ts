import { configDotenv } from "dotenv";
import { MongoClient } from "mongodb";
import express, { Request, Response } from "express";
import { foodCategoryRouter } from "./router/food-category";
import { foodModel } from "./models/food-model";
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
app.use("/food-category", foodCategoryRouter);

app.get("/food", async (req: Request, res: Response) => {
  const food = await foodModel.find();
  res.json(food);
});

app.post("/food", async (req: Request, res: Response) => {
  const newItem = await foodModel.create({
    foodName: req.body.foodName,
    price: req.body.price,
    image: "htpp://url",
    ingredients: "",
  });
  res.json({ message: "new food created succesfully", newItem });
});

app.delete("/food/:id", async (req: Request, res: Response) => {
  const deleteId = req.params.id;
  const deleteFood = await foodModel.findByIdAndDelete(deleteId);

  res.json({
    message: "food deleted",
    deleteFood,
    price: req.body.price,
    image: "htpp://url",
    ingredients: "",
  });
});

app.put("/food/:id", async (req: Request, res: Response) => {
  const updateId = req.params.id;
  const foodUpdated = await foodModel.findByIdAndUpdate(
    updateId,
    {
      foodName: req.body.foodName,
      price: req.body.price,
      image: "htpp://url",
      ingredients: "",
    },
    { new: true }
  );
  res.json(foodUpdated);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
