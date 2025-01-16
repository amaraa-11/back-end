import { model, Schema } from "mongoose";

const FOOD_CATEGORY_SCHEMA = new Schema(
  {
    CategoryName: String,
  },
  {
    timestamps: true,
  }
);
const FoodCategoryModel = model(
  "FoodCategory",
  FOOD_CATEGORY_SCHEMA,
  "food-category"
);

export { FoodCategoryModel };
