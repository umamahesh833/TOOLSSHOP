
import { test, expect } from '@playwright/test'
const {HomePage} = require("../PageObjects/HomePage")

test('Validate Pagination', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/')
    const homePage = new HomePage(page)

    // Using number for numbered pages
    await expect(homePage.pageMap[2]).toBeVisible()
    await homePage.clickPage(2)

    
    await expect(homePage.pageMap['next']).toBeVisible()
    await homePage.clickPage('next')
})