import{Page, Locator, expect} from '@playwright/test'
export class CartPage{

page : Page
productTitle :Locator
productPrice : Locator
constructor(page :Page){
    this.page = page
    //cart page
    this.productTitle = page.locator(".product-title")
    this.productPrice = page.locator("[data-test='product-price']")
}

async ValidateProductTitle(){
//Capture the title of the product
 let productname : any = await this.productTitle.textContent()
await expect(productname.trim()).toBe('Hammer');
await expect(this.productTitle).toHaveText('Hammer');
}

async ValidateProductPrice(){
await expect(this.productPrice).toHaveText('$12.58');
}






}