// Launch the application
// Select the filter option
// Displays list of items available on shopping list
// select the Hand Tools and power tools
import { test, expect } from '@playwright/test'
test('validate all the hand tools and power tools are displayed', async ({ page }) => {
// Open website
  await page.goto('https://practicesoftwaretesting.com')
  await expect(page).toHaveTitle(/Toolshop/)

  await page.getByLabel('Hand Tools').check();
  await page.getByLabel('Power Tools').check();

  await expect(page.getByLabel('Hand Tools')).toBeChecked();
  await expect(page.getByLabel('Power Tools')).toBeChecked();
  
  
 




})