import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    role: { type: String, enum: ["Admin", "Receptionist", "DepartmentStaff"], required: true },
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true }
)

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10);
    next();
});

export default mongoose.model("user", userSchema)