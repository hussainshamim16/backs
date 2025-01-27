import express from "express";
import mongoose from "mongoose";

const beneficiarySchema = new mongoose.Schema({
    cnic: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    purpose: { type: String, required: true },
    status: { type: String, default: "Pending" },
    remarks: { type: String,  default: "Pending" },
  });

export default mongoose.model("beneficiarySchema", beneficiarySchema)


// Reception pe Registration:
// Arrival: Beneficiary reception desk par aata hai.
// Information Collection: Receptionist details collect karta hai:
// CNIC (unique identifier).
// Name, phone number, address.
// Purpose of visit (e.g., financial aid ya medical assistance).
// Token Assignment: Ek unique token generate hota hai jo specific department se linked hota hai.
// Confirmation: Token ka detail print ya SMS ke zariye diya jata hai.