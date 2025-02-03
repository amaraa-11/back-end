"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.foodRouter = void 0;
const express_1 = require("express");
const food_model_1 = require("../models/food-model");
exports.foodRouter = (0, express_1.Router)();
exports.foodRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const food = yield food_model_1.foodModel.find();
    res.json(food);
}));
exports.foodRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newItem = yield food_model_1.foodModel.create({
        name: req.body.name,
        price: req.body.price,
        image: req.body.image,
        ingredients: req.body.ingredients,
        category: req.body.category,
    });
    res.json({ message: "new food created succesfully", newItem });
}));
exports.foodRouter.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deleteId = req.params.id;
    const deleteFood = yield food_model_1.foodModel.findByIdAndDelete(deleteId);
    res.json({ message: "food deleted", deleteFood });
}));
exports.foodRouter.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updateId = req.params.id;
    const foodUpdated = yield food_model_1.foodModel.findByIdAndUpdate(updateId, {
        name: req.body.name,
        price: req.body.price,
        image: req.body.image,
        ingredients: req.body.ingredients,
    }, { new: true });
    res.json(foodUpdated);
}));
