

import { test, expect } from '@playwright/test'
const {Register} = require("../PageObjects/Registration")
const {HomePage} = require("../PageObjects/HomePage")
const {SignInPage} = require("../PageObjects/SignInPage")
const {ProductsDetailPage} = require("../PageObjects/ProductsDetailPage")
import { ExcelData } from "../TestData/DataUtil"


test.only('test', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');

  const homePage = new HomePage(page)
  const signinpage = new SignInPage(page)
  const register = new Register(page)
  const data = await ExcelData()
  const productdetails =  new ProductsDetailPage(page)
  
  await homePage.ClickSignIn()
  await signinpage.ClickRegisterLink()
  await register.RegisterUser(data)
  await signinpage.LoginToApp(register.userEmail,register.userPassword)
  await homePage.ClickHomePage()
  await homePage.ClickHammer()
  await productdetails.ClickAddToCart()
  await productdetails.ValidateAlert()
  await homePage.ClickCartIcon()

 
  
  // await page.locator('[data-test="proceed-1"]').click();
  // await page.locator('[data-test="proceed-2"]').click();
  // await page.locator('[data-test="house_number"]').click();
  // await page.locator('[data-test="house_number"]').fill('72');
  // await page.locator('[data-test="proceed-3"]').click();
  // await page.locator('[data-test="payment-method"]').selectOption('cash-on-delivery');
  // await page.locator('[data-test="finish"]').click();
  // await page.locator('[data-test="finish"]').click();
  // await page.getByText('INV-').click();
  // await page.getByText('Thanks for your order! Your').click();
  // await page.getByText('Thanks for your order! Your').click();
  // await page.locator('body').press('ControlOrMeta+c');
});