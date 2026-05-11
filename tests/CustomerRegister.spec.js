

import { test, expect } from '@playwright/test';

test('Validate Registration Form', async ({ page }) => {
  let data = ExcelData()
  await page.goto('https://practicesoftwaretesting.com/');
  await page.locator('[data-test="nav-sign-in"]').click();
  await page.locator('[data-test="register-link"]').click();
  await page.locator('[data-test="first-name"]').fill(data.firstNM);
  await page.locator('[data-test="last-name"]').fill('TestLN');
  await page.locator('[data-test="dob"]').fill('1992-08-07');
  await page.locator('[data-test="country"]').selectOption('GB');
  await page.locator('[data-test="postal_code"]').fill('WD245AN');
  await page.locator('[data-test="house_number"]').fill('3');
  await page.locator('[data-test="street"]').fill('Judge Street');
  await page.locator('[data-test="city"]').fill('Watford');
  await page.locator('[data-test="state"]').fill('Hertfordshire');
  await page.locator('[data-test="phone"]').fill('07466540522');
  await page.locator('[data-test="email"]').fill('Testlnfn@test.com');
  await page.locator('[data-test="password"]').fill('Playwright@123');
  await page.locator('[data-test="register-submit"]').click();
  await page.locator('[data-test="register-submit"]').click();
  await page.locator('[data-test="email"]').fill('Testlnfn@test.com');
  await page.locator('[data-test="password"]').fill('Playwright@123');
  await page.locator('[data-test="login-submit"]').click();
  await page.goto('https://practicesoftwaretesting.com/account');
});