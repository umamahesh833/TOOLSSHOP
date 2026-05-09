import {expect} from '@playwright/test';
export class CartPage{



constructor(page){
    this.page = page
    //cart page
    this.productTitle = page.locator(".product-title")
    this.productPrice = page.locator("[data-test='product-price']")
}

async ValidateProductTitle(){
//Capture the title of the product
 const productname = await this.productTitle.textContent()
await expect(productname.trim()).toBe('Hammer');
await expect(this.productTitle).toHaveText('Hammer');
}

async ValidateProductPrice(){
await expect(this.productPrice).toHaveText('$12.58');
}






}