import { test, expect } from '@playwright/test';
import {ProductsDetailPage} from '../PageObjects_ts/ProductsDetailPage'
import {HomePage} from '../PageObjects_ts/HomePage'
import {CartPage} from '../PageObjects_ts/CartPage'


test.only('Validate product add to cart',async ({page})=>{

//Launch the application
await page.goto('https://practicesoftwaretesting.com/')

//Creating object for page classes
const homePage = new HomePage(page)
const productsDetailPage = new ProductsDetailPage(page)
const cartPage = new CartPage(page)

await homePage.ClickHammer()
await productsDetailPage.ClickAddToCart()
await productsDetailPage.ValidateAlert()
await homePage.ClickCartIcon()

await cartPage.ValidateProductTitle()
await cartPage.ValidateProductPrice()

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

//Creating object for page classes
const homePage = new HomePage(page)
const productsDetailPage = new ProductsDetailPage(page)

await homePage.ClickFirstProduct()
await productsDetailPage.ClickAddToCart()
await productsDetailPage.ValidateAlert()
await homePage.ClickHomePage()


await homePage.ClickNthProduct(2)
await productsDetailPage.ClickAddToCart()
await productsDetailPage.ValidateAlert()
await homePage.ClickHomePage()

await homePage.ClickLastProduct()
await productsDetailPage.ClickAddToCart()
await productsDetailPage.ValidateAlert()

await homePage.ClickCartIcon()


})


//Sample line to check the branch push