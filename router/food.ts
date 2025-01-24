import { Request, Response, Router } from "express";

import { foodModel } from "../models/food-model";

export const foodRouter = Router();

foodRouter.get("/", async (req: Request, res: Response) => {
  const food = await foodModel.find();
  res.json(food);
});

foodRouter.post("/", async (req: Request, res: Response) => {
  const newItem = await foodModel.create({
    foodName: req.body.foodName,
    price: req.body.price,
    image: "",
    ingredients: req.body.ingredients,
    category: req.body.category,
  });
  res.json({ message: "new food created succesfully", newItem });
});

foodRouter.delete("/:id", async (req: Request, res: Response) => {
  const deleteId = req.params.id;
  const deleteFood = await foodModel.findByIdAndDelete(deleteId);

  res.json({ message: "food deleted", deleteFood });
});

foodRouter.put("/:id", async (req: Request, res: Response) => {
  const updateId = req.params.id;
  const foodUpdated = await foodModel.findByIdAndUpdate(
    updateId,
    {
      foodName: req.body.foodName,
      price: req.body.price,
      image: "",
      ingredients: req.body.ingredients,
    },
    { new: true }
  );
  res.json(foodUpdated);
});
