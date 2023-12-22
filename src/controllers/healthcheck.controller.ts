import { Request, Response } from "express";
interface HealtCheck {
  uptime: string;
  message: "OK" | "ERROR";
  timestamp: number;
}

export const healthCheck = async (req: Request, res: Response) => {
  const uptimeInSeconds = process.uptime();
  const hours = Math.floor(uptimeInSeconds / 3600);
  const minutes = Math.floor((uptimeInSeconds % 3600) / 60);
  const seconds = Math.floor(uptimeInSeconds % 60);
  const uptime = `${hours}h ${minutes}m ${seconds}s`;

  const healthcheck: HealtCheck = {
    uptime,
    message: "OK",
    timestamp: Date.now(),
  };

  try {
    res.status(200).send(healthcheck);
  } catch (error) {
    healthcheck.message = "ERROR";
    res.status(503).send(healthcheck);
  }
};
