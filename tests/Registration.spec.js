
import { test, expect } from '@playwright/test';
import { json } from 'node:stream/consumers';
const testData = require("../TestData/DataUtil.js")
const envdata = JSON.parse(JSON.stringify(require("../TestData/EnvData.json")))


test('Validate Registration Form', async ({ page }) => {
    
      let data = await testData.ExcelData()
      
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
        await this.email.fill(`${Date.now()}${data.email}`)
        await this.password.fill(data.passwd)
        await this.registerButton.click()
    
})
