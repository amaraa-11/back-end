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
exports.foodCategoryRouter = void 0;
const express_1 = require("express");
const food_category_1 = require("../models/food-category");
exports.foodCategoryRouter = (0, express_1.Router)();
exports.foodCategoryRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const food = yield food_category_1.FoodCategoryModel.find();
    res.json(food);
}));
exports.foodCategoryRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const food = yield food_category_1.FoodCategoryModel.findById(id);
    res.json(food);
}));
exports.foodCategoryRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newItem = yield food_category_1.FoodCategoryModel.create({
        CategoryName: req.body.CategoryName,
    });
    res.json({ message: "new food created succesfully", newItem });
}));
exports.foodCategoryRouter.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deleteId = req.params.id;
    const deleteFood = yield food_category_1.FoodCategoryModel.findByIdAndDelete(deleteId);
    res.json({ message: "food deleted", deleteFood });
}));
exports.foodCategoryRouter.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updateId = req.params.id;
    const foodUpdate = yield food_category_1.FoodCategoryModel.findByIdAndUpdate(updateId, {
        CategoryName: req.body.CategoryName,
    }, { new: true });
    res.json(foodUpdate);
}));
