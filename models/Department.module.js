import mongoose from 'mongoose';

const departmentSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true
    },
    beneficiary: {
        cnic: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        }
    },
    purpose: {
        type: String,
        required: true
    },
    history: [{
        action: {
            type: String, // E.g. 'Assistance Provided'
            required: true
        },
        timestamp: {
            type: Date,
            default: Date.now
        }
    }],
    remarks: {
        type: String
    },
    status: {
        type: String, // E.g. 'In Progress', 'Completed'
        default: 'In Progress'
    }
});

// Create the model
export default mongoose.model("Department", departmentSchema)


// Department Interaction:
// Token Presentation: Beneficiary apna token department me present karta hai.
// Scan and Retrieve: Staff token scan karke beneficiary ka:
// Details dekh sakta hai.
// Purpose aur history check kar sakta hai.
// Assistance Provided: Staff required help provide karta hai aur system me remarks aur updates save karta hai.