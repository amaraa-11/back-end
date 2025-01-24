import { model, Schema, models } from "mongoose";

const FOOD_CATEGORY_SCHEMA = new Schema(
  {
    CategoryName: String,
  },
  {
    timestamps: true,
  }
);
const FoodCategoryModel =
  models["FoodCategory"] ||
  model("FoodCategory", FOOD_CATEGORY_SCHEMA, "food-category");

export { FoodCategoryModel };
