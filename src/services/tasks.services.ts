import { PrismaClient, Prisma } from "@prisma/client";

type TaskCreateInput = Prisma.TaskCreateInput;
type TaskUpdateInput = Prisma.TaskUpdateInput & { id: number };
const prisma = new PrismaClient();
// -------------------------Create Task-----------------------
export const createTaskService = async (task: TaskCreateInput) => {
  try {
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
  } catch (error) {
    console.log(error);
  }
};

// -------------------------Update Task-----------------------
export const updateTaskService = async (task: TaskUpdateInput) => {
  try {
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
  } catch (error) {}
};
// -------------------------Delete Task-----------------------
export const deleteTaskService = async (taskId: number) => {
  try {
    const deleteTask = await prisma.task.delete({
      where: {
        id: taskId,
      },
    });

    return deleteTask;
  } catch (error) {}
};

export const getTasksService = async () => {
  try {
    const tasks = await prisma.task.findMany();
    return tasks;
  } catch (error) {}
};
