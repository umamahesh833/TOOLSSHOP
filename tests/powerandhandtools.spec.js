import { test, expect } from '@playwright/test'
const {HomePage} = require("../PageObjects/HomePage")

test.only('Validate Hand Tools and Power Tools filter', async ({ page }) => {

  // Launch the application
  await page.goto('https://practicesoftwaretesting.com/');

  const homePage = new HomePage(page)

  await homePage.checkhandtools()
  //await homePage.checkpowertools()

  await expect(homePage.handtools).toBeChecked();
  //await expect(homePage.powertools).toBeChecked();
  const expectedProducts = [
    'Hammer',
    'Hand Saw',
    'Wrench',
    'Screwdriver',
    'Pliers',
    'Chisels',
    'Measures',
    'Grinder',
    'Sander',
    'Saw',
    'Drill',
    
  ];
  // Verify products are displayed
  await expect(homePage.handtools.first()).toBeVisible();
  //await page.pause()

  // Count displayed products
  const count = await homePage.productNames.count();

  for (let i = 0; i < count; i++) {

  const productText = await homePage.productNames
    .nth(i)
    .textContent();

  const product = productText?.trim();

  console.log(product);

  // Validate partial match
  const isValidProduct = expectedProducts.some(expected =>
    product?.includes(expected)
  );

  await expect(isValidProduct).toBeTruthy();
}
});