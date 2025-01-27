import mongoose from "mongoose";
import User from "../models/user.model.js";


const addUser = async (req, res) => {
    // get values from the request
    const { name, email, password } = req.body;
    // check if all fields are filled
    if (!name || !email || !password) {
        res.status(404).json({ message: "Please fill all the fields" });
        return;
    }
    // create a new user
    const Createuser = await User.create({
        name,
        email,
        password,
    });
    res.status(201).json({ message: "user is create successfuly 🧡💛💚", Createuser });
}

const LoginUser = async (req, res) => {
    // get values from the request
    const {email, password } = req.body;
    // check if all fields are filled
    if (!email || !password) {
        res.status(404).json({ message: "Please fill all the fields" });
        return;
    }
    // login  user
    const loginUser = await User.findOne({
        email,
        password,
    });
    if (!loginUser){
        res.status(404).json({ message: "invalid user name and password" });
        return;
    }
    res.status(201).json({ message: "user is login 🧡💛💚", loginUser });
}

// get all users
const Allusers = async (req, res) => {
    const users = await User.find();
    res.json
        ({ message: "All users", users });
}

export { addUser, Allusers,LoginUser };
