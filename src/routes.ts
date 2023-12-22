import express from "express";
import { healthCheck } from "./controllers/healthcheck.controller";
import { createUser } from "./controllers/createUser.controller";
import {
  createTaskController,
  updateTaskController,
  deleteTaskController,
  getTasksController,
} from "./controllers/tasks.controller";
const router = express.Router();

// Define routes here
router.get("/health", healthCheck);

router.post("/createUser", createUser);

router.post("/createTask", createTaskController);
router.post("/updateTask", updateTaskController);
router.delete("/deleteTask", deleteTaskController);
router.get("/tasks", getTasksController);

export default router;
