import { PrismaClient, Prisma } from "@prisma/client";

type TaskCreateInput = Prisma.TaskCreateInput;
type TaskUpdateInput = Prisma.TaskUpdateInput & { id: number };
// -------------------------Create Task-----------------------
export const createTaskService = async (task: TaskCreateInput) => {
  const prisma = new PrismaClient();

  const { title, isDone, userId, description } = task;
  const newTask = await prisma.task.create({
    data: {
      title,
      description,
      isDone,
      userId,
    },
  });

  return newTask;
};

// -------------------------Update Task-----------------------
export const updateTaskService = async (task: TaskUpdateInput) => {
  const prisma = new PrismaClient();

  const { title, isDone, userId, description, id } = task;
  const newTask = await prisma.task.update({
    data: {
      title,
      description,
      isDone,
      userId,
    },
    where: {
      id,
    },
  });

  return newTask;
};
// -------------------------Delete Task-----------------------
export const deleteTaskService = async (taskId: number) => {
  const prisma = new PrismaClient();

  const deleteTask = await prisma.task.delete({
    where: {
      id: taskId,
    },
  });

  return deleteTask;
};
