import dotenv from "dotenv";
dotenv.config();

export const config = {
  USERNAME: process.env.LOGIN_USER,
  PASSWORD: process.env.LOGIN_PASS,
  USER_ID: process.env.USER_ID,
  HEADLESS: process.env.HEADLESS === "true",
  SERVER_MODE: process.env.NODE_ENV,
};
