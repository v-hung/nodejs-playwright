import dotenv from "dotenv";
dotenv.config();

export const config = {
  USERNAME: process.env.LOGIN_USER,
  PASSWORD: process.env.LOGIN_PASS,
  HEADLESS: process.env.HEADLESS === "true",
  SERVER_MODE: process.env.NODE_ENV,
};
