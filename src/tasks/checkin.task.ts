import { launchBrowser } from "../core/browser";
import { maybeLogin } from "../core/auth";

const URL = "https://localhost:8080/admin/products";
const BTN_SELECTOR = ".btn.btn-primary.btn-sm.rounded";

export const checkIn = async () => {
  const { browser, page } = await launchBrowser();

  await page.goto(URL);
  await maybeLogin(page);

  await page.goto(URL);
  await page.waitForSelector(BTN_SELECTOR);
  await page.click(BTN_SELECTOR);

  await page.waitForLoadState("networkidle");

  let screenshotPath = `./storage/screenshot_${new Date()
    .toISOString()
    .replace(/[:.]/g, "-")}.png`;

  await page.screenshot({
    path: screenshotPath,
  });

  await browser.close();

  console.log(`Đã hoàn thành check-in! Xem ảnh chụp tại ${screenshotPath}`);
};
