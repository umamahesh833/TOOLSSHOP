
class OrderHistoryPage{



constructor(page){
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

module.exports ={OrderHistoryPage}