

import { test, expect } from '@playwright/test'
const {Register} = require("../PageObjects/Registration")
const {HomePage} = require("../PageObjects/HomePage")
const {SignInPage} = require("../PageObjects/SignInPage")
const {ProductsDetailPage} = require("../PageObjects/ProductsDetailPage")
import { ExcelData } from "../TestData/DataUtil"
import {CartPage } from '../PageObjects/CartPage'

test.only("Validating for Submitting the form confirms the order.", async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');

  const homePage = new HomePage(page)
  const signinpage = new SignInPage(page)
  const register = new Register(page)
  const data = await ExcelData()
  const productdetails =  new ProductsDetailPage(page)
  const cartpage = new CartPage(page)
  await homePage.ClickSignIn()
  await signinpage.ClickRegisterLink()
  await register.RegisterUser(data)
  await page.waitForTimeout(3000)
  await signinpage.LoginToApp(register.userEmail,register.userPassword)
  await page.waitForTimeout(1000)
  await homePage.ClickHomePage()
  await homePage.ClickHammer()
  await productdetails.ClickAddToCart()
  await productdetails.ValidateAlert()
  await homePage.ClickCartIcon()
  await cartpage.Proceedtocheckout(
    signinpage,
    register.userEmail,
    register.userPassword
)
  await register.houseNumber.fill(data.Hno)
  await cartpage.proceedtocheckoutpay()

  const methods = [
    'Bank Transfer',
    'Cash on Delivery',
    'Credit Card',
    'Buy Now Pay Later',
    'Gift Card'
  ]

const randomMethod =
    methods[Math.floor(Math.random() * methods.length)]

await cartpage.paymentoption('Cash on Delivery')
await cartpage.confirmmethod()
await cartpage.paymentsucessmethod()
await cartpage.confirmmethod()
await cartpage.Invoicemethod()
});