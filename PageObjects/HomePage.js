class HomePage{



constructor(page){
    this.page = page
    this.Hammer = page.locator("[alt='Hammer']")
    this.CartIcon  = page.locator("[data-test='nav-cart']")
    this.Products = page.locator(".card-img-top")
    this.HomePge = page.getByRole("link",{name:"Home"})
    this.SignIn =  page.locator('[data-test="nav-sign-in"]')
    this.handtools = page.getByLabel('Hand Tools')
    this.powertools = page.getByLabel('Power Tools')
}

async ClickSignIn(){
    await this.SignIn.click()
}

async ClickHammer(){
    await this.Hammer.click()
}

async ClickCartIcon(){
    await this.CartIcon.click()
}

async ClickFirstProduct(){
    await this.Products.first().click()
}

async ClickNthProduct(Number){
    await this.Products.nth(Number).click()
}

async ClickLastProduct(){
    await this.Products.last().click()
}

async ClickHomePage(){
    await this.HomePage.click()
}
async checkhandtools(){
    await this.handtools.check()
}

async checkpowertools(){
    await this.powertools.check()
}
}

module.exports ={HomePage}
