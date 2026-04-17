import { Locator } from "@playwright/test";
import { ConfigManager } from "../config/ConfigManager";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
  private readonly usernameInput = "#user-name";
  private readonly passwordInput = "#password";
  private readonly loginButton = "#login-button";
  private readonly errorMessage = "[data-test='error']";
  private readonly loginLogo = ".login_logo";

  constructor(page: any) {
    super(page);
  }

  async open() {
    await this.navigateTo(ConfigManager.getInstance().baseUrl);
  }

  async login(user: string, pass: string): Promise<void> {
    await this.typeText(this.usernameInput, user);
    await this.typeText(this.passwordInput, pass);
    await this.clickElement(this.loginButton);
  }

  async getErrormessage(): Promise<string | null> {
    return await this.getText(this.errorMessage);
  }

  async isLogoLoaded(): Promise<Locator> {
    return this.page.locator(this.loginLogo);
  }

  async hasError(): Promise<Locator> {
    return this.page.locator(this.errorMessage);
  }
}
