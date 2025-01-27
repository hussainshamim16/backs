import express from 'express';
const router = express.Router();


router.get('/login',(req, res) => {res.send("login")})
router.get('/signup',(req, res) => {res.send("signup")})

export default router