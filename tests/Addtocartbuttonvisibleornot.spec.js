// 1.Launch the application.
// 2.Go to Home page
// 3.Click on Product image link
// 4.Check whether the product image link is navigated to proper page or not
// 5.Check whether we can see Add to cart button or not
// 6.Click on Add to cart button
// 7.Check whether the Add to cart button enabled or not
import { test, expect } from '@playwright/test'
const {ProductsDetailPage} = require("../PageObjects/ProductsDetailPage")
const {HomePage} = require("../PageObjects/HomePage")


test.only('Validate add to cart button',async ({page})=>{

    await page.goto('https://practicesoftwaretesting.com/')
    const homePage = new HomePage(page)
    const productsDetailPage = new ProductsDetailPage(page)


    const productCards = await page.locator('.card')

    const count = await productCards.count()

    console.log(count)

    for (let i = 0; i < count; i++) {

        const card = productCards.nth(i)

       await card.click();
       await expect(productsDetailPage.addtoCart).toBeVisible()

    // Verify button is enabled
        await expect(productsDetailPage.addtoCart).toBeEnabled()
        
        await page.goBack()

        // wait for cards again
        await expect(productCards.first()).toBeVisible()
    }

})