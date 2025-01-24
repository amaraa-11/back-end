import { model, Schema, models } from "mongoose";

const FOOD_SCHEMA = new Schema(
  {
    foodName: String,
    price: Number,
    image: String,
    ingredients: String,
    category: String,
  },
  {
    timestamps: true,
  }
);
const foodModel = models["Food"] || model("Food", FOOD_SCHEMA, "food");

export { foodModel };
