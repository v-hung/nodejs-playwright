import { checkIn } from "./tasks/checkin.task";
import { setup } from "./scheduler";
import { config } from "./config/config";

const main = async () => {
  console.log("Bắt đầu ...");

  if (config.SERVER_MODE == "development") {
    await checkIn();
  } else {
    setup();
  }
};

main();
