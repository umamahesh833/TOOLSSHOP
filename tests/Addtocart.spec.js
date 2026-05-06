// 1)Launch the application
    // 3) Select a product 
    // 4) Click on add to cart button
    // 5) Open the cart page
    // 6) Add another product to the cart
import { test, expect } from '@playwright/test';

test.only('Validate product add to cart', async ({ page }) => {
// Open website
  await page.goto('https://practicesoftwaretesting.com')
  await expect(page).toHaveTitle(/Toolshop/)

  const products = page.locator('.card-img-top')
  const addcart = page.locator('[data-test="add-to-cart"]')
  const navcart = page.locator('[data-test="nav-cart"]')
  const contshopping= page.locator('[data-test="continue-shopping"]')
  const noofproducts=page.locator('//table/tbody/tr')

   await products.nth(7).click()
   await addcart.click()
   await navcart.click()
   await expect(page.locator('[data-test="product-price"]')).toBeVisible()
   await expect(page.locator('[data-test="product-title"]')).toBeVisible()
   await contshopping.click()
   await products.nth(5).click()
   await addcart.click()
   await navcart.click()
   
})