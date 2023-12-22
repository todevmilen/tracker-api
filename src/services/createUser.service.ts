// create user service that receive user information and create user in database via user model with prisma client
import IUser from "../types/IUser";
import { PrismaClient } from "@prisma/client";
// ------------------------------------------------------------------------------------------------
export const createUserService = async (user: IUser) => {
  const prisma = new PrismaClient();

  const { username, hash, firstName, lastName } = user;
  const newUser = await prisma.user.create({
    data: {
      username,
      hash,
      firstName,
      lastName,
    },
  });

  return newUser;
};
