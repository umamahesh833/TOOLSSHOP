class SignInPage{



constructor(page){
    this.page = page
    this.registerLink = page.locator('[data-test="register-link"]')
    this.EmailId = page.locator('[data-test="email"]')
    this.Password = page.locator('[data-test="password"]')
    this.submit = page.locator('[data-test="login-submit"]')
}

async ClickRegisterLink() {

   await this.registerLink.click()
}

async LoginToApp(userEmail,userPassword){
   await this.EmailId.fill(userEmail)
   await this.Password.fill(userPassword)
   await this.submit.click()
}

// async LoginToApp(Username, password){
//    await this.EmailId.fill(Username)
//    await this.Password.fill(password)
//    await this.submit.click()
// }


}

module.exports ={SignInPage}