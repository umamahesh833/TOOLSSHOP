import { test, expect } from '@playwright/test';



test.only('Handle Multiple Windows',async ({browser})=>{

//Creating a new browser context
const context = await browser.newContext()
//Create a new page
const page = await context.newPage()
await page.goto('https://practicesoftwaretesting.com/')


const [NewPage] = await Promise.all([
    context.waitForEvent('page'),
    //Clicking on documentation link
    await page.getByRole("link", {name:"Documentation"}).click()
])

await NewPage.getByPlaceholder("Type to search").fill("Playwright")


await NewPage.waitForTimeout(5000)
await NewPage.close()
await page.waitForTimeout(5000)

})


test('Mouse Hovering test', async ({ page }) => {

  await page.goto('https://www.ebay.co.uk/');
  //Accept cookies
  await page.getByRole("button", {name:"Accept all"}).click()
  

  await page.getByRole("link", {name:"Home"}).last().hover()
    await page.waitForTimeout(1000)
    await page.keyboard.press("ArrowDown")

    await page.waitForTimeout(5000)




});