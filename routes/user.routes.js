import express from 'express';
const router = express.Router();


router.get('/users',(req, res) => {res.send("users")})
router.get('/users/:id',(req, res) => {res.send("users",req.params.id)})