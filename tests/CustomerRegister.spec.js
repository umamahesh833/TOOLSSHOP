import { test, expect } from '@playwright/test';
import { json } from 'node:stream/consumers';
const testData = require("../TestData/DataUtil.js")
const envdata = JSON.parse(JSON.stringify(require("../TestData/EnvData.json")))


test('Validate Registration Form', async ({ page }) => {

  let data = await testData.ExcelData()


  await page.goto(envdata.TestEnvURL);
  await page.locator('[data-test="nav-sign-in"]').click();
  await page.locator('[data-test="register-link"]').click();
  await page.locator('[data-test="first-name"]').fill(data.FirstName);
  await page.locator('[data-test="last-name"]').fill(data.LastName);
  await page.locator('[data-test="dob"]').fill('1992-08-07');
  await page.locator('[data-test="country"]').selectOption('GB');
  await page.locator('[data-test="postal_code"]').fill(data.Pcode);
  await page.locator('[data-test="house_number"]').fill(data.Hno);
  await page.locator('[data-test="street"]').fill(data.Street);
  await page.locator('[data-test="city"]').fill(data.City);
  await page.locator('[data-test="state"]').fill(data.State);
  await page.locator('[data-test="phone"]').fill(data.Phone);
  await page.locator('[data-test="email"]').fill(data.email);
  await page.locator('[data-test="password"]').fill(data.Passwd);
  await page.locator('[data-test="register-submit"]').click();
  await page.locator('[data-test="register-submit"]').click();
  await page.locator('[data-test="email"]').fill(data.email);
  await page.locator('[data-test="password"]').fill(data.Passwd);
  await page.locator('[data-test="login-submit"]').click();






});