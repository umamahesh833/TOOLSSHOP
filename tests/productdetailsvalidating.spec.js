import { test, expect } from '@playwright/test';


test('Validate each product details page', async ({ page }) => {

    await page.goto('https://practicesoftwaretesting.com/');
    

    // all product cards
    const productCards = await page.locator('.card');

    const count = await productCards.count();

    console.log(count);

    for (let i = 0; i < count; i++) {

        const card = productCards.nth(i);

        // get product details from card
        const productName = await card
            .locator('[data-test="product-name"]')
            .textContent();

        const productPrice1 = await card
            .locator('[data-test="product-price"]')
            .textContent();
        const productPrice = productPrice1.replace('$',' ').trim()


        const imageSrc = await card
            .locator('.card-img-top')
            .getAttribute('src');

        console.log(productName);
        console.log(productPrice);
        console.log(imageSrc);

        // click product
        await card.click();

        // validate product detail page
        await expect(page.locator('[data-test="product-name"]'))
            .toHaveText(productName);

        await expect(page.locator('[data-test="unit-price"]'))
            .toContainText(productPrice);

        await expect(page.locator('.img-fluid'))
            .toBeVisible();

        await expect(page.locator('[data-test="product-description"]'))
            .toBeVisible();

        // go back
        await page.goBack();

        // wait for cards again
        await expect(productCards.first()).toBeVisible();
    }
});
