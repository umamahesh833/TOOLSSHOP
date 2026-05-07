import{test, expect} from '@playwright/test'



test('Lakshman Test', async ({ page }) => {
  await page.goto('https://ui.vision/demo/webtest/frames/');

  const NoofFrames = await page.frames().length

  console.log(NoofFrames)

const FrameOne =   page.frameLocator("frame[src='frame_1.html']")

  await FrameOne.locator("input[name='mytext1']").fill("Mahesh")

  await page.waitForTimeout(2000)

});




test('Alerts Test', async ({ page }) => {
  await page.goto('https://demoqa.com/alerts');
  await page.waitForTimeout(2000)


    page.on("dialog", async(alert)=>{
        const mess = alert.message()
        console.log(mess)
        expect(mess).toEqual("Please enter your name")
        alert.dismiss("Lakshman")
    })

    await page.locator("#promtButton").click()
     
    await expect(page.locator("#promptResult")).toHaveText("You entered Lakshman")
    
});