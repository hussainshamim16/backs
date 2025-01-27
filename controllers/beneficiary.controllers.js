import mongoose from "mongoose";
import Beneficiary from "../models/Beneficiary.js";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

// Function to generate JWT token
const generateAccessToken = (beneficiary) => {
    if (!process.env.ACCESS_JWT_SECRET) {
        throw new Error("ACCESS_JWT_SECRET is not set in environment variables");
    }

    return jwt.sign(
        { cnic: beneficiary.cnic, id: beneficiary._id }, // Include _id for better tracking
        process.env.ACCESS_JWT_SECRET,
        { expiresIn: "10h" }
    );
};

// Controller to add a new beneficiary
const addBeneficiary = async (req, res) => {
    const { cnic, name, phone, address, purpose, status, remarks } = req.body;

    // Validate input fields
    if (!cnic || !name || !phone || !address || !purpose) {
        return res.status(400).json({ message: "Please fill in all the required fields" });
    }

    try {
        // Check if the beneficiary with the same CNIC already exists
        const existingBeneficiary = await Beneficiary.findOne({ cnic });
        if (existingBeneficiary) {
            return res.status(400).json({ message: "Beneficiary with this CNIC already exists" });
        }

        // Create a new beneficiary record
        const newBeneficiary = await Beneficiary.create({
            cnic,
            name,
            phone,
            address,
            purpose,
            status,
            remarks,
        });

        // Generate JWT token for the beneficiary
        const accessToken = generateAccessToken(newBeneficiary);

        // Respond with success message and token
        res.status(201).json({
            message: "Beneficiary created successfully 🧡💛💚",
            beneficiary: newBeneficiary,
            token: accessToken, // Include token in the response
        });
    } catch (error) {
        // Improved error handling
        console.error("Error adding beneficiary:", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export { addBeneficiary };
