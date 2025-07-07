import { launchBrowser } from "../core/browser";
import { maybeLogin } from "../core/auth";
import { Page } from "playwright";
import { config } from "../config/config";

const URL = `http://192.168.11.100:8080/ECS/timesheet/${config.USER_ID}`;
const CHECKIN_BTN_SELECTOR =
  "form[action='/ECS/timesheet/checkin'] input[type='submit']";
const FORM_CHECKOUT_SELECTOR = "form[action='/ECS/timesheet/checkout']";

export const checkIn = async () => {
  const { browser, page } = await launchBrowser();

  await page.goto(URL);
  await maybeLogin(page);

  await page.goto(URL);

  await page.waitForSelector(FORM_CHECKOUT_SELECTOR, { timeout: 5000 });

  const formCheckOutVisible = await page
    .locator(FORM_CHECKOUT_SELECTOR)
    .isVisible()
    .catch(() => false);

  if (formCheckOutVisible) {
    let screenshotPath = await screenPage(page);
    console.log(
      `Tài khoản đã được check-in rồi! Dừng chạy.\nXem ảnh chụp tại ${screenshotPath}`
    );
  } else {
    await page.waitForSelector(CHECKIN_BTN_SELECTOR, { timeout: 5000 });
    await page.click(CHECKIN_BTN_SELECTOR);

    await page.waitForLoadState("networkidle");

    let screenshotPath = await screenPage(page);
    console.log(`Đã hoàn thành check-in!\nXem ảnh chụp tại ${screenshotPath}`);
  }

  await browser.close();
};

const screenPage = async (page: Page) => {
  let screenshotPath = `./storage/screenshot_${new Date()
    .toISOString()
    .replace(/[:.]/g, "-")}.png`;

  await page.screenshot({
    path: screenshotPath,
  });

  return screenshotPath;
};
