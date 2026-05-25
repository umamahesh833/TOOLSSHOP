import {expect} from '@playwright/test';
export class ProductsDetailPage{



constructor(page){
this.page = page
this.addtoCart = page.getByRole("button", {name:'Add to cart'})
this.alert = page.locator("[role='alert']")
this.productName = page.locator('[data-test="product-name"]')
this.productPrice = page.locator('[data-test="unit-price"]')

}


async ClickAddToCart(){
    await this.addtoCart.click()
}

async ValidateAlert(){
    //Validate alert is displaying
    await expect(this.alert).toBeVisible();
}

 async GetProductName(){
    return await this.productName.textContent()
}

async GetProductPrice(){
    return await this.productPrice.textContent()
}

}