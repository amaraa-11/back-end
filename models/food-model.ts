import { model, Schema } from "mongoose";

const FOOD_SCHEMA = new Schema(
  {
    foodName: String,
    price: Number,
    image: String,
    ingredients: String,
  },
  {
    timestamps: true,
  }
);
const foodModel = model("Food", FOOD_SCHEMA, "food");

export { foodModel };
