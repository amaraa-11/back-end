import { Request, Response, Router } from "express";
import { FoodCategoryModel } from "../models/food-category";

export const foodCategoryRouter = Router();

foodCategoryRouter.get("/", async (req: Request, res: Response) => {
  const food = await FoodCategoryModel.find();
  res.json(food);
});

foodCategoryRouter.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const food = await FoodCategoryModel.findById(id);
  res.json(food);
});

foodCategoryRouter.post("/", async (req: Request, res: Response) => {
  const newItem = await FoodCategoryModel.create({
    CategoryName: req.body.CategoryName,
  });
  res.json({ message: "new food created succesfully", newItem });
});

foodCategoryRouter.delete("/:id", async (req: Request, res: Response) => {
  const deleteId = req.params.id;
  const deleteFood = await FoodCategoryModel.findByIdAndDelete(deleteId);

  res.json({ message: "food deleted", deleteFood });
});

foodCategoryRouter.put("/:id", async (req: Request, res: Response) => {
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
