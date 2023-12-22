import express from "express";
import { healthCheck } from "./controllers/healthcheck.controller";
import { createUser } from "./controllers/createUser.controller";
import {
  createTaskController,
  updateTaskController,
} from "./controllers/tasks.controller";
const router = express.Router();

// Define routes here
router.get("/health", healthCheck);

router.post("/createUser", createUser);

router.post("/createTask", createTaskController);
router.post("/updateTask", updateTaskController);

export default router;
