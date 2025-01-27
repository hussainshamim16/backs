import mongoose from "mongoose";

// Schema for Admin Dashboard Model
const adminSchema = new mongoose.Schema({
    // Daily Insights
    totalVisitors: {
        newBeneficiaries: {
            type: Number,
            default: 0
        },
        returningBeneficiaries: {
            type: Number,
            default: 0
        }
    },
    departmentActivity: [{
        departmentName: {
            type: String,
            required: true
        },
        activityCount: {
            type: Number,
            default: 0
        }
    }],

    // Search Records (Beneficiary information)
    searchRecords: [{
        CNIC: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    }],

    // Reports and Logs (Audit and tracking)
    logs: [{
        actionType: {
            type: String,  // E.g. 'Added', 'Updated', 'Deleted'
            required: true
        },
        beneficiaryCNIC: {
            type: String,
            required: true
        },
        timestamp: {
            type: Date,
            default: Date.now
        }
    }],

    // Completion of Help (Status and History)
    completionStatus: {
        type: String, // E.g. 'Completed', 'In Progress'
        default: 'In Progress'
    },
    historyLogging: [{
        action: {
            type: String, // E.g. 'Assistance Provided', 'Help Completed'
            required: true
        },
        beneficiaryCNIC: {
            type: String,
            required: true
        },
        timestamp: {
            type: Date,
            default: Date.now
        }
    }]
});

// Create the model
export default mongoose.model("Admin", adminSchema)





// Admin Dashboard:
// Daily Insights:
// Total visitors (new aur returning beneficiaries ke saath).
// Department-wise activity statistics.
// Search Records:
// CNIC, phone number, ya name se search karne ka option.
// Reports and Logs:
// Detailed logs ko audit aur tracking ke liye access kar sakte hain.
// 4. Completion of Help:
// Status Update: Jab assistance complete hoti hai, system me status update hota hai.
// History Logging: Beneficiary ke CNIC ke against sari actions ka record future ke liye save hota hai.