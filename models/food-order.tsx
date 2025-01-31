import { Schema, models, model } from "mongoose";

const FoodOrderItemSchema = new Schema({
  food: String,
  quantity: Number,
});
const FOOD_ORDER_SCHEMA = new Schema(
  {
    user: String,
    totalPrice: Number,
    foodOrderItems: [FoodOrderItemSchema],
    status: {
      type: String,
      enum: ["PENDING", "DELIVERED", "CANCELLED"],
      default: "PENDING",
    },
  },
  { timestamps: true }
);
const FoodOrderModel =
  models["FoodOrder"] || model("FoodOrder", FOOD_ORDER_SCHEMA);
export { FoodOrderModel };
