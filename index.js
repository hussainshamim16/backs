import express from 'express';  
import dotenv from "dotenv";

dotenv.config();
const app = express()
const port = process.env.PORT || 5000;
import UserRoutes from './routes/user.routes.js'

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.send('about')
})
app.use("/users/",UserRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})