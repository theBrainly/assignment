import { Router } from "express";
import { handleConfiguration, handleConfigurationRemark } from "../controllers/configurationsController.js";
const router = Router();




router.get('/configurations/:id', handleConfiguration);
router.put('/configurations/:id', handleConfigurationRemark);
export default router;
