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
    this.productNames = page.locator('[data-test="product-name"]')
    this.pageMap = {
            previous : page.locator('[aria-label="Previous"]'),
            next     : page.locator('[aria-label="Next"]'),
        }
    for (let i = 1; i <= 5; i++) {
            this.pageMap[i] = page.locator(`[aria-label="Page-${i}"]`);
        }
    // this.pageprevious = page.locator('[aria-label="Previous"]')
    // this.pagenext = page.locator('[aria-label="Next"]')
    // this.pageone = page.locator('[aria-label="Page-1"]')
    // this.pagetwo = page.locator('[aria-label="Page-2"]')
    // this.pagethree = page.locator('[aria-label="Page-3"]')
    // this.pagefour = page.locator('[aria-label="Page-4"]')
    // this.pagefive = page.locator('[aria-label="Page-5"]')
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
    await this.HomePge.click()
}
async checkhandtools(){
    await this.handtools.check()
}

async checkpowertools(){
    await this.powertools.check()
}
async clickPage(target) {
        const locator = this.pageMap[target];
        if (!locator) throw new Error('Unknown page')
        await locator.click()
    }
}


module.exports ={HomePage}
