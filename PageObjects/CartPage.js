import {expect} from '@playwright/test';
export class CartPage{



constructor(page){
    this.page = page
    //cart page
    this.productTitle = page.locator(".product-title")
    this.productPrice = page.locator("[data-test='product-price']")
    this.totalPrice = page.locator("[data-test='line-price']")
    this.quantity = page.locator("[data-test='product-quantity']")
    
}

async ValidateProductTitle(product){
//Capture the title of the product
const productname = await this.productTitle.textContent()
await expect(productname.trim()).toBe(product.trim());
//await expect(this.productTitle).toHaveText('Hammer');
}

async ValidateProductPrice(price){
    const productPrice = await this.productPrice.textContent()
await expect(productPrice.replace('$',' ').trim()).toBe(price.replace('$',' ').trim());
}
 async ValidateTotalPrice(){

    const quantity = await this.quantity.inputValue()
    const productPriceText = await this.productPrice.textContent()
    const totalPriceText = await this.totalPrice.textContent()
    // Convert values
    const qty = parseInt(quantity)
    const productPrice = parseFloat(productPriceText.replace('$',''))
    const actualTotal = parseFloat(totalPriceText.replace('$',''))
    // Expected total
    const expectedTotal = qty * productPrice
    // Validation
    await expect(actualTotal).toBe(expectedTotal)
    }
}