class Register {

    constructor(page) {

        this.page = page
        
        this.firstName = page.locator('[data-test="first-name"]')
        this.lastName = page.locator('[data-test="last-name"]')
        this.dob = page.locator('[data-test="dob"]')
        this.country = page.locator('[data-test="country"]')
        this.postalCode = page.locator('[data-test="postal_code"]')
        this.houseNumber = page.locator('[data-test="house_number"]')
        this.street = page.locator('[data-test="street"]')
        this.city = page.locator('[data-test="city"]')
        this.state = page.locator('[data-test="state"]')
        this.phone = page.locator('[data-test="phone"]')
        this.email = page.locator('[data-test="email"]')
        this.password = page.locator('[data-test="password"]')
        this.registerButton = page.locator('[data-test="register-submit"]')
    }

    
    
     // let data = await testData.ExcelData()
      async RegisterUser(data){
        await this.firstName.fill(data.FirstName)
        await this.lastName.fill(data.LastName)
        await this.dob.fill("2000-01-17")
        await this.country.selectOption("GB")
        await this.postalCode.fill(data.Pcode)
        await this.houseNumber.fill(data.Hno)
        await this.street.fill(data.Street)
        await this.city.fill(data.City)
        await this.state.fill(data.State)
        await this.phone.fill(data.Phone)
        this.userEmail = `${Date.now()}${data.email}`
        this.userPassword = data.Passwd
        await this.email.fill(this.userEmail)
        await this.password.fill(this.userPassword)
        await this.registerButton.click()
    }
}

module.exports = { Register }