import { test, expect } from '@playwright/test';


test('Validating My Orders or “Order History”', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
  await page.locator('[data-test="nav-sign-in"]').click();
  await page.locator('[data-test="email"]').click();
  await page.locator('[data-test="email"]').fill('umamahesh833@gmail.com');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('SoftwareTesting@123456789');
  await page.locator('[data-test="login-form"]').getByRole('button').filter({ hasText: /^$/ }).click();
  await page.locator('[data-test="login-submit"]').click();
  await page.locator('[data-test="nav-invoices"]').click();

 //await page.getByRole('link', { name: 'Details' }).click();

  const InvoiceNumber =  page.locator('//table/tbody/tr/td[1]')

  await expect(InvoiceNumber).toHaveText('INV-2026000012');

  //mahesh
});


test('Lakshman Test', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
  await page.locator('[data-test="nav-sign-in"]').click();
  await page.locator('[data-test="email"]').click();
  await page.locator('[data-test="email"]').fill('umamahesh833@gmail.com');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('SoftwareTesting@123456789');
  await page.locator('[data-test="login-form"]').getByRole('button').filter({ hasText: /^$/ }).click();
  await page.locator('[data-test="login-submit"]').click();
  await page.locator('[data-test="nav-invoices"]').click();

 //await page.getByRole('link', { name: 'Details' }).click();

  const InvoiceNumber =  page.locator('//table/tbody/tr/td[1]')

  await expect(InvoiceNumber).toHaveText('INV-2026000012');

  //mahesh
});


test('test', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
  await page.locator('[data-test="nav-sign-in"]').click();
  await page.locator('[data-test="email"]').click();
  await page.locator('[data-test="email"]').fill('testlnfn323@gmail.com');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('Playwright@123');
  await page.locator('[data-test="login-submit"]').click();
  await page.locator("[routerlink='invoices']").click()

  expect(page.locator("//table[@class='table table-hover']")).toBeEnabled()
  await page.pause()
});