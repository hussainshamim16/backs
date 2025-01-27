import express from 'express';  
const app = express()
const port = 3000
import UserRoutes from './routes/user.routes.js'

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use("/users/",UserRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})