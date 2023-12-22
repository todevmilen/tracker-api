import dotenv from "dotenv";

dotenv.config();

interface Config {
  USERNAME: string;
  PASSWORD: string;
}

export const config: Config = {
  USERNAME: process.env.USERNAME!,
  PASSWORD: process.env.PASSWORD!,
};

export const DEFAULT_URL: string =
  "https://locator.lt/LoctrackerFieldService/REST/v1";
