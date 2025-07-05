import cron from "node-cron";
import { checkIn } from "./tasks/checkin.task";

export const setup = () => {
  cron.schedule("0 8 * * *", async () => {
    console.log(`⏰ ${new Date().toLocaleString()} - Bắt đầu check-in...`);
    await checkIn();
  });
};
