import { Page, Locator } from "@playwright/test";
import { IBaseActions } from "./interfaces/IBaseActions";

export abstract class BasePage implements IBaseActions {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  async navigateTo(url: string): Promise<void> {
    await this.page.goto(url);
  }

  async getTitle(): Promise<string> {
    return this.page.title();
  }

  /**
   * Clicks on an element after waiting for it to become visible.
   * @param selector - CSS selector or XPath of the element.
   */
  async clickElement(selector: string): Promise<void> {
    const locator = await this.waitForElement(selector);
    await locator.click();
  }

  async typeText(selector: string, text: string): Promise<void> {
    const locator = await this.waitForElement(selector);
    await locator.fill(text);
  }

  async getText(selector: string): Promise<string | null> {
    const locator = await this.waitForElement(selector);
    return await locator.textContent();
  }

  private async waitForElement(selector: string): Promise<Locator> {
    const locator = this.page.locator(selector);
    await locator.waitFor({ state: "visible" });
    return locator;
  }
}
