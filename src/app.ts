import express, { Application } from "express";
import router from "./routes";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config();

const app: Application = express();

// Middleware
app.use(express.json());

// Logger
app.use(morgan("short"));

// Mount API routes
app.use("/api", router);

export default app;
