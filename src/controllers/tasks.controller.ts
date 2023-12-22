import { Request, Response } from "express";
import {
  createTaskService,
  updateTaskService,
} from "../services/tasks.services";
import { Prisma } from "@prisma/client";

type TaskCreateInput = Prisma.TaskCreateInput;
type TaskUpdateInput = Prisma.TaskUpdateInput;
// ------------------------------------------------------------------------------------------------
export const createTaskController = async (req: Request, res: Response) => {
  try {
    const props: TaskCreateInput = {
      title: req.body.title,
      description: req.body.description,
      isDone: req.body.isDone,
      userId: req.body.userId,
    };
    const task = await createTaskService(props);
    res.status(200).send(task);
  } catch (error) {
    console.log(error);
  }
};

// ------------------------------------------------------------------------------------------------
export const updateTaskController = async (req: Request, res: Response) => {
  try {
    const props: TaskUpdateInput & { id: number } = {
      id: req.body.id,
      title: req.body.title,
      description: req.body.description,
      isDone: req.body.isDone,
    };
    const task = await updateTaskService(props);
    res.status(200).send(task);
  } catch (error) {
    console.log(error);
  }
};
