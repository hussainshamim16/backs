import Admin from '../models/Admin.module.js';

// Get Admin Dashboard Data
const getAdminDashboard = async (req, res) => {
    try {
        const adminData = await Admin.find();
        if (adminData.length === 0) {
            return res.status(404).json({ message: 'No admin dashboard data found' });
        }
        res.status(200).json(adminData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add New Admin Dashboard Data
const addAdminDashboard = async (req, res) => {
    const {
        totalVisitors,
        departmentActivity,
        searchRecords,
        logs,
        completionStatus,
        historyLogging
    } = req.body;

    try {
        const newAdminDashboard = new Admin({
            totalVisitors,
            departmentActivity,
            searchRecords,
            logs,
            completionStatus,
            historyLogging
        });

        const savedAdminDashboard = await newAdminDashboard.save();
        res.status(201).json({ message: 'Admin dashboard data created successfully', savedAdminDashboard });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update Admin Dashboard Data
const updateAdminDashboard = async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;

    try {
        const updatedDashboard = await Admin.findByIdAndUpdate(id, updateData, { new: true });
        if (!updatedDashboard) {
            return res.status(404).json({ message: 'Dashboard data not found' });
        }
        res.status(200).json({ message: 'Admin dashboard updated successfully', updatedDashboard });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete Admin Dashboard Data
const deleteAdminDashboard = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedDashboard = await Admin.findByIdAndDelete(id);
        if (!deletedDashboard) {
            return res.status(404).json({ message: 'Dashboard data not found' });
        }
        res.status(200).json({ message: 'Admin dashboard data deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export {
    getAdminDashboard,
    addAdminDashboard,
    updateAdminDashboard,
    deleteAdminDashboard
};
