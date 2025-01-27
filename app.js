import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
// import user routes
import userRoutes from './routes/user.routes.js'
import Beneficiary from './routes/beneficiary.routes.js'
import Admin from './routes/Admin.routes.js'
import Department from './routes/department.routes.js'
import cors from 'cors';

const app = express();
const port = process.env.PORT;
app.use(express.json());  // To parse JSON data
app.use(urlencoded({ extended: true })); //))
app.use(cors());

// Middleware
app.use(express.json());
dotenv.config();

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!hussain shamim');
});
// All User Routes
app.use('/api/', userRoutes);
app.use('/api/', Beneficiary);
app.use('/api/', Admin);
app.use('/api/', Department);

connectDB()
  .then(() => {
    app.listen( process.env.PORT || 3000, () => {
      console.log(`⚙️  Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO DB connection failed !!! ", err);
  });