import express from 'express';
import {
    getAdminDashboard,
    addAdminDashboard,
    updateAdminDashboard,
    deleteAdminDashboard
} from "../controllers/Admin.controllers.js";


const router = express.Router();

// Route to get all admin dashboard data
router.get('/admin', getAdminDashboard);

// Route to add new admin dashboard data
router.post('/admin', addAdminDashboard);

// Route to update admin dashboard data
router.put('/admin:id', updateAdminDashboard);

// Route to delete admin dashboard data
router.delete('/admin:id', deleteAdminDashboard);

export default router;
