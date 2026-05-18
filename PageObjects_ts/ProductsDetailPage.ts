import {expect, Page, Locator} from '@playwright/test';
export class ProductsDetailPage{

page : Page
addtoCart : Locator
alert : Locator

constructor(page : Page){
this.page = page
this.addtoCart = page.getByRole("button", {name:'Add to cart'})
this.alert = page.locator("[role='alert']")
}


async ClickAddToCart(){
    await this.addtoCart.click()
}

async ValidateAlert(){
    //Validate alert is displaying
    await expect(this.alert).toBeVisible();
}

}