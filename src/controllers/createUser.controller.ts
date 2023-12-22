import { Request, Response } from "express";
import IUser from "../types/IUser";
import { createUserService } from "../services/createUser.service";

// ------------------------------------------------------------------------------------------------
export const createUser = async (req: Request, res: Response) => {
  try {
    const props: IUser = {
      username: req.body.username, // Access the username property from the parsed body
      hash: req.body.hash,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    };
    const user = await createUserService(props);
    res.status(200).send(user);
  } catch (error) {
    console.log("error");
  }
};
