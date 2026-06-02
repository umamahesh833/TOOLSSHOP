import {expect} from '@playwright/test';

export class CartPage{



constructor(page){
    this.page = page
    //cart page
    this.productTitle = page.locator(".product-title")
    this.productPrice = page.locator("[data-test='product-price']")
    this.totalPrice = page.locator("[data-test='line-price']")
    this.quantity = page.locator("[data-test='product-quantity']")
    this.proceedtocheckout = page.locator('[data-test="proceed-1"]')
    this.proceedtocheckout2 = page.locator('[data-test="proceed-2"]')
    this.proceedtocheckout3 = page.locator('[data-test="proceed-3"]')
    this.paymentmethod = page.locator('[data-test="payment-method"]')
    this.confirm = page.locator('[data-test="finish"]')
    this.paymenysucess = page.locator('[data-test = "payment-success-message"]')
    this.invoicenum = page.locator("#order-confirmation")
   

    
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

    async Proceedtocheckout(signinpage, email, password) {

        await this.proceedtocheckout.click();

        const loggedInMessage = this.page.getByText(/you are already logged in/i);

        if (await loggedInMessage.isVisible()) {

            console.log('User already logged in');

            await this.proceedtocheckout2.click();

        } else {

            console.log('User not logged in');
            await signinpage.LoginToApp(email, password);
        }
    
    }
    async proceedtocheckoutpay(){
        await this.proceedtocheckout3.click()
        
    }
    async paymentoption(method) {
    await this.paymentmethod.selectOption({ label: method })
    }
    async confirmmethod(){
        await this.confirm.click()
    }
    
    async paymentsucessmethod() {
     const sucesmessage = await this.paymenysucess.textContent()
     console.log(sucesmessage)
    }

    async Invoicemethod() {
     const invoicemessage = await this.invoicenum.textContent()
     console.log(invoicemessage)
    }






}

    
    

    

