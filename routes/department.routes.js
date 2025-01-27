import express from 'express';
import { getDepartmentByToken, updateDepartmentInteraction, addNewInteraction } from '../controllers/department.controllers.js';

const router = express.Router();

// Route to get department interaction by token
router.get('/department/:token', getDepartmentByToken);

// Route to update department interaction
router.put('/department/:token', updateDepartmentInteraction);

// Route to add new department interaction
router.post('/department', addNewInteraction);

export default router;
