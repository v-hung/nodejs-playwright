import { Page } from "playwright";
import { config } from "../config/config";

const LOGIN_SELECTOR = "form#loginForm";
const USERNAME_SELECTOR = "input[name='username']";
const PASSWORD_SELECTOR = "input[name='password']";
const LOGIN_BUTTON_SELECTOR = "button";

export const maybeLogin = async (page: Page) => {
  await page.waitForSelector(LOGIN_SELECTOR, { timeout: 5000 });

  const loginVisible = await page
    .locator(LOGIN_SELECTOR)
    .isVisible()
    .catch(() => false);

  if (!loginVisible) {
    return;
  }

  const loginForm = page.locator(LOGIN_SELECTOR);

  await loginForm.locator(USERNAME_SELECTOR).fill(config.USERNAME || "");
  await loginForm.locator(PASSWORD_SELECTOR).fill(config.PASSWORD || "");

  await loginForm.locator(LOGIN_BUTTON_SELECTOR).click();

  await page.waitForLoadState("networkidle");

  const stillLogin = await page
    .locator(LOGIN_SELECTOR)
    .isVisible()
    .catch(() => false);

  if (stillLogin) throw new Error("Đăng nhập thất bại!");

  console.log("Đăng nhập thành công!");
};
