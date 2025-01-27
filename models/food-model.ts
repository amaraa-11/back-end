import { model, Schema, models } from "mongoose";

const FOOD_SCHEMA = new Schema(
  {
    name: String,
    price: Number,
    image: String,
    ingredients: String,
    category: {
      type: Schema.Types.ObjectId,
      ref: "FoodCategory",
    },
  },
  {
    timestamps: true,
  }
);
const foodModel = models["Food"] || model("Food", FOOD_SCHEMA, "food");

export { foodModel };
