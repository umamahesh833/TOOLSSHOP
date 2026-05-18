import { test, expect } from '@playwright/test'
const {HomePage} = require("../PageObjects/HomePage")


test.only('validate all the hand tools and power tools are displayed', async ({ page }) => {
// Open website
  await page.goto('https://practicesoftwaretesting.com')
  const homePage = new HomePage(page)

  await homePage.checkhandtools()
  await homePage.checkpowertools()

  await expect(homePage.handtools).toBeChecked();
  await expect(homePage.powertools).toBeChecked();
})