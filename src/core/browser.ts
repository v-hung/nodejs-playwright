import { chromium, Browser, Page } from "playwright";
import { config } from "../config/config";

export const launchBrowser = async (): Promise<{
  browser: Browser;
  page: Page;
}> => {
  const browser = await chromium.launch({
    headless: config.HEADLESS,
    args: ["--window-size=1280,800"],
  });
  const page = await browser.newPage();
  return { browser, page };
};
