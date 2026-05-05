import{test, expect} from '@playwright/test'


test('My first mahesh Test ',async ({page})=>{
//Launch the browser and navigate to our application
await page.goto("https://practicesoftwaretesting.com/")
await page.waitForTimeout(5000)
await expect(page).toHaveTitle(/Testing/);

await page.getByText("Sign in").click()


// await page.getByPlaceholder('Your email').fill("Mahesh")
// await page.getByPlaceholder('Your password').fill("test123")
// await page.waitForTimeout(2000)

// await page.getByRole("button", {name:"Login"}).click()
await page.waitForTimeout(2000)

await page.getByRole("link", {name:"Register your account"}).click()

//Entering firname
await page.locator("input#first_name").fill("Automation")
await page.locator("input[data-test='last-name']").fill("Automation")
await page.waitForTimeout(2000)


//Selecting an item from a drop down
const CoutryDropDown = page.locator('#country')
await CoutryDropDown.selectOption("Denmark")//selecting item using label
await page.waitForTimeout(2000)
// await CoutryDropDown.selectOption("FR")//selecting item using value
// await page.waitForTimeout(2000)
// await CoutryDropDown.selectOption({index:5})//selecting item using index



await page.locator("//button[@type='submit']").click()

const DoBerror = page.locator("//div[@id='dob-error']/div[2]")
console.log("error message - "+await DoBerror.textContent())
})



test('Radio Button Test ',async ({page})=>{
//Launch the browser and navigate to our application
await page.goto("https://automationexercise.com/signup")
await page.waitForTimeout(5000)
await page.getByRole("button", {name:"Consent"}).click()
await page.getByPlaceholder("Name").fill("Random9987@gmail.com")
await page.waitForTimeout(1000)
await page.locator("[data-qa='signup-email']").fill("Random9987@gmail.com")

const SignUp = page.getByRole("button", {name:'Signup'})
await SignUp.click()

//select a radio button

const mrRadio = page.locator('#id_gender1')
const mrsRadio = page.locator('#id_gender2')
await mrRadio.click()


console.log("the status of radio button Mr is - "+await mrRadio.isChecked())
console.log("the status of radio button Mrs is - "+await mrsRadio.isChecked())


//Select a check box
const NewsLetterCheckBox = page.locator('#newsletter')
await NewsLetterCheckBox.click()
await page.waitForTimeout(3000)
await NewsLetterCheckBox.uncheck()
})



test('submit Button Test ',async ({page})=>{
//Launch the browser and navigate to our application
await page.goto("https://automationexercise.com/signup")
await page.waitForTimeout(5000)
await page.getByRole("button", {name:"Consent"}).click()
await page.getByPlaceholder("Name").fill("Random9987@gmail.com")
await page.waitForTimeout(1000)
await page.locator("[data-qa='signup-email']").fill("Random9987@gmail.com")

const SignUp = page.getByRole("button", {name:'Signup'})
await SignUp.click()

//select a radio button

const mrRadio = page.locator('#id_gender1')
const mrsRadio = page.locator('#id_gender2')
await mrRadio.click()


console.log("the status of radio button Mr is - "+await mrRadio.isChecked())
console.log("the status of radio button Mrs is - "+await mrsRadio.isChecked())


//Select a check box
const NewsLetterCheckBox = page.locator('#newsletter')
await NewsLetterCheckBox.click()
await page.waitForTimeout(3000)
await NewsLetterCheckBox.uncheck()
})
