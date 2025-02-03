"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersModel = void 0;
const mongoose_1 = require("mongoose");
const USERS_SCHEMA = new mongoose_1.Schema({
    email: String,
    password: Number,
    phoneNumber: Number,
    address: String,
    role: String,
    orderedFoods: Number,
    ttl: Date,
    isVerified: Boolean,
    ingredients: String,
    price: Number,
    quantity: Number,
}, {
    timestamps: true,
});
const usersModel = (0, mongoose_1.model)("Users", USERS_SCHEMA, "users");
exports.usersModel = usersModel;
