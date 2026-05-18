import {expect, Page, Locator} from '@playwright/test';
export class SignInPage{

page : Page
EmailId : Locator
Password : Locator
submit : Locator

constructor(page : Page){
    this.page = page
    this.EmailId = page.locator('[data-test="email"]')
    this.Password = page.locator('[data-test="password"]')
    this.submit = page.locator('[data-test="login-submit"]')
}

async LoginToAppoold(){
   await this.EmailId.fill('testlnfn323@gmail.com')
   await this.Password.fill('Playwright@123')
   await this.submit.click()
}

async LoginToApp(Username : string, password:string){
   await this.EmailId.fill(Username)
   await this.Password.fill(password)
   await this.submit.click()
}


}

