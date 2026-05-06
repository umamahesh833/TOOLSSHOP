import { test, expect } from '@playwright/test';






test.only('Validate product add to cart',async ({page})=>{

//Launch the application
await page.goto('https://practicesoftwaretesting.com/')


const Hammer = page.locator("[alt='Hammer']")
const addtoCart = page.getByRole("button", {name:'Add to cart'})
const alert = page.locator("[role='alert']")
const CartIcon = page.locator("[data-test='nav-cart']")
const productTitle = page.locator(".product-title")
const productPrice = page.locator("[data-test='product-price']")

//Click on a product
await Hammer.click()

//Click on add to cart button
await addtoCart.click()

//Validate alert is displaying
await expect(alert).toBeVisible();

//Click on cart icon
await CartIcon.click()

//Capture the title of the product
 const productname = await productTitle.textContent()
// console.log(productname)
//await page.pause()
await expect(productname).toBe('Hammer ');



await expect(productTitle).toHaveText('Hammer');
await expect(productPrice).toHaveText('$12.58');

})



test.only('Add multiple products to cart and validate in cart page',async ({page})=>{

//Launch the application
await page.goto('https://practicesoftwaretesting.com/')

const Products = page.locator(".card-img-top")
const addtoCart = page.getByRole("button", {name:'Add to cart'})
const CartIcon = page.locator("[data-test='nav-cart']")
const alert = page.locator("[role='alert']")
const HomePge = page.getByRole("link",{name:"Home"})
const NoofProduct = page.locator("//table/tbody/tr")

await Products.first().click()
await addtoCart.click()
//Validate alert is displaying
await expect(alert).toBeVisible();
await HomePge.click()

await page.waitForTimeout(2000)

await Products.nth(4).click()
await addtoCart.click()
//Validate alert is displaying
await expect(alert).toBeVisible();
await HomePge.click()
await page.waitForTimeout(2000)

await Products.last().click()
await addtoCart.click()
//Validate alert is displaying
await expect(alert).toBeVisible();
//Click on cart icon
await CartIcon.click()


})