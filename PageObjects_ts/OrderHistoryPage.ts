import{Page, Locator} from '@playwright/test'
export class OrderHistoryPage{

page : Page
Invoices : Locator
InvTable : Locator

constructor(page: Page){
    this.page = page
    this.Invoices = page.locator("[routerlink='invoices']")
    this.InvTable = page.locator("//table[@class='table table-hover']")
}

async ClickInvoice(){
   await this.Invoices.click()
}

async ValidateInvoiceTable(){
   // await expect(this.InvTable).toBeEnabled()
}



}
