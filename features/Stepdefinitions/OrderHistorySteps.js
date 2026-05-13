const{Given, When, Then} = require("@cucumber/cucumber");
const {expect, chromium} = require("@playwright/test");





Given('I launched the application',async function () {
console.log("--->I launched the application")
  browser = await chromium.launch({
    headless: false
  });
  page = await browser.newPage();
  await page.goto('https://practicesoftwaretesting.com')
});


When('sign in to the application',async function () {
console.log("--->sign in to the application")

 await page.locator('[data-test="nav-sign-in"]').click();
  await page.locator('[data-test="email"]').fill('testlnfn323@gmail.com');
  await page.locator('[data-test="password"]').fill('Playwright@123');
  await page.locator('[data-test="login-submit"]').click();

});


When('I navigate to order history',async function () {
console.log("--->I navigate to order history")
   await page.locator("[routerlink='invoices']").click()
});


Then('I should identify previous order', function () {
  expect(page.locator("//table[@class='table table-hover']")).toBeEnabled()
});

