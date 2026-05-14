class SignInPage{



constructor(page){
    this.page = page
    this.EmailId = page.locator('[data-test="email"]')
    this.Password = page.locator('[data-test="password"]')
    this.submit = page.locator('[data-test="login-submit"]')
}

async LoginToApp(){
   await this.EmailId.fill('testlnfn323@gmail.com')
   await this.Password.fill('Playwright@123')
   await this.submit.click()
}

async LoginToApp(Username, password){
   await this.EmailId.fill(Username)
   await this.Password.fill(password)
   await this.submit.click()
}


}

module.exports ={SignInPage}