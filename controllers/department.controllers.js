import Department from '../models/Department.module.js';

// Function to get department details using token
const getDepartmentByToken = async (req, res) => {
    // Get the token from URL parameters
    const { token } = req.params;

    try {
        // Look for the department using the token in the database
        const department = await Department.findOne({ token });

        // If the department is not found, return a 404 error
        if (!department) {
            return res.status(404).json({ message: 'Department not found' });
        }

        // If the department is found, return it
        res.status(200).json(department);
    } catch (error) {
        // If something goes wrong, return a 500 error
        res.status(500).json({ message: 'Error fetching department: ' + error.message });
    }
};

// Function to update department details with remarks and status
const updateDepartmentInteraction = async (req, res) => {
    // Extract token from URL and the new data from the request body
    const { token } = req.params;
    const { remarks, status, action } = req.body;

    try {
        // Find the department by token and update it
        const department = await Department.findOneAndUpdate(
            { token }, // Search by token
            {
                $push: { history: { action, timestamp: new Date() } }, // Add the new action to history
                remarks, // Update remarks
                status // Update status
            },
            { new: true } // Return the updated department
        );

        // If the department is not found, return a 404 error
        if (!department) {
            return res.status(404).json({ message: 'Department not found' });
        }

        // Return the updated department
        res.status(200).json({ message: 'Department updated successfully', department });
    } catch (error) {
        // If something goes wrong, return a 500 error
        res.status(500).json({ message: 'Error updating department: ' + error.message });
    }
};

// Function to add a new department interaction
const addNewInteraction = async (req, res) => {
    // Extract token, beneficiary, and purpose from the request body
    const { token, beneficiary, purpose } = req.body;

    try {
        // Create a new department interaction object
        const newInteraction = new Department({
            token,
            beneficiary,
            purpose
        });

        // Save the new interaction to the database
        const savedInteraction = await newInteraction.save();

        // Return a success message and the saved interaction data
        res.status(201).json({ message: 'New department interaction added', savedInteraction });
    } catch (error) {
        // If something goes wrong, return a 500 error
        res.status(500).json({ message: 'Error adding new interaction: ' + error.message });
    }
};

// Export the functions to be used in routes
export { getDepartmentByToken, updateDepartmentInteraction, addNewInteraction };
