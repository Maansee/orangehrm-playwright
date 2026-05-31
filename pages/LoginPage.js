import { LOGIN_LOCATORS } from "../locators/loginlocators";

export class LoginPage {
    constructor(page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('/web/index.php/auth/login');
    }

    async enterUsername(username) {
        await this.page.locator(LOGIN_LOCATORS.usernameInput).fill(username);

    }

    async enterPassword(password) {
        await this.page.locator(LOGIN_LOCATORS.passwordInput).fill(password);

    }

    async clickLogin() {
        await this.page.locator(LOGIN_LOCATORS.loginButton).click();
    }

    async loginAs(username, password) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLogin();
    }

    async getErrorMessage() {
    return await this.page.locator(LOGIN_LOCATORS.errorMessage).textContent();
  }

  async getDashboardHeader() {
    return await this.page.locator(LOGIN_LOCATORS.dashboardHeader).textContent();
  }

  async isRequiredErrorVisible() {
  return await this.page.locator(LOGIN_LOCATORS.requiredError).first().isVisible();
}


}

