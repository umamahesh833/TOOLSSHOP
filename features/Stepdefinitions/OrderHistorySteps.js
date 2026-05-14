const{Given, When, Then} = require("@cucumber/cucumber");
const {expect, chromium} = require("@playwright/test");
const {HomePage} = require("../../PageObjects/HomePage")
const {SignInPage} = require("../../PageObjects/SignInPage")
const {OrderHistoryPage} = require("../../PageObjects/OrderHistoryPage")





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
  const homePage = new HomePage(page)
  const signInPage = new SignInPage(page)
  
  await homePage.ClickSignIn()
  await signInPage.LoginToApp()

});

 When('I sign with {string} and {string}',async function (string, string2) {
 console.log("--->sign in to the application")
  const homePage = new HomePage(page)
  const signInPage = new SignInPage(page)
  
  await homePage.ClickSignIn()
  await signInPage.LoginToApp(string, string2)
});



When('I navigate to order history',async function () {
console.log("--->I navigate to order history")
  const orderHistoryPage = new OrderHistoryPage(page)
  await orderHistoryPage.ClickInvoice()

});


Then('I should identify previous order',async function () {
  console.log("--->I should identify previous order")
  //   const orderHistoryPage = new OrderHistoryPage(page)
  // await orderHistoryPage.ValidateInvoiceTable()

});




When('I select a product', function () {

});


When('I add to cart and go to cartpage', function () {

});


Then('the product should be there in cart page', function () {

});

