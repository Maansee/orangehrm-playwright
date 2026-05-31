import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { PimPage } from '../pages/PimPage';
import { CREDENTIALS } from '../constants/credentials';


export const test = base.extend({

    //gives loginpage object --> no login performed
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await use(loginPage);
    },

    //gives you a page that is already logged in
    authenticatedPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.loginAs(
            CREDENTIALS.validUser.username,
            CREDENTIALS.validUser.password
        );
        await page.waitForURL('**/dashboard/index');
        await use(page);
    },

    //gives you pim page + authenticated page
      pimPage: async ({ authenticatedPage }, use) => {
        const pimPage = new PimPage(authenticatedPage);
        await pimPage.goto();
        await use(pimPage);
    },
});


export { expect } from '@playwright/test';
