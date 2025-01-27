import express from 'express';
const router = express.Router();
import {
    addBeneficiary
} from "../controllers/beneficiary.controllers.js";


router.post("/register",addBeneficiary)
// router.post("/generate-token",generate-token )
// router.post("/update-status",update-status )


export default router;
