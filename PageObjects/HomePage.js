class HomePage{



constructor(page){
    this.page = page
    this.Hammer = page.locator("[alt='Hammer']")
    this.CartIcon  = page.locator("[data-test='nav-cart']")
    this.Products = page.locator(".card-img-top")
    this.HomePge = page.getByRole("link",{name:"Home"})
    this.SignIn =  page.locator('[data-test="nav-sign-in"]')
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
    this.Products.first().click()
}

async ClickNthProduct(Number){
    this.Products.nth(Number).click()
}

async ClickLastProduct(){
        this.Products.last().click()
}

async ClickHomePage(){
    this.HomePge.click()
}
}

module.exports ={HomePage}
