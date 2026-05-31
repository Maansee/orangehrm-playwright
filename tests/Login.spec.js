import { test, expect } from '../fixtures/baseFixture';
import { CREDENTIALS, MESSAGES } from '../constants/credentials';

test.describe('Login Module', () => {
    test('TC_Login_1 - Valid login navigated to dashboard', async ({ loginPage, page }) => {
        await loginPage.loginAs(
            CREDENTIALS.validUser.username,
            CREDENTIALS.validUser.password
        );
        await expect(page).toHaveURL(/dashboard/);
    });

    test('TC_Login_2 - Invalid credentials show error', async ({ loginPage, page }) => {
        await loginPage.loginAs(
            CREDENTIALS.invalidUser.username,
            CREDENTIALS.invalidUser.password
        );
        const error = await loginPage.getErrorMessage();
        expect(error).toContain(MESSAGES.invalidCredentials);
    });

    test('TC_Login_3 - Empty credentials show error', async ({ loginPage, page }) => {
        await loginPage.clickLogin();

        await expect(page.locator('.oxd-input-field-error-message').first()).toBeVisible();
    })


})