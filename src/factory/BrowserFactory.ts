import {
  chromium,
  firefox,
  webkit,
  Browser,
  LaunchOptions,
} from "@playwright/test";

import { BrowserType } from "./BrowserType";

/**
 * Factory Pattern: Encapsulates the creation of different types of browsers.
 * Open/Closed: If we want to add a new browser, we only add one case here.
 */
export class BrowserFactory {
  static async createBrowser(
    browserType: BrowserType,
    options?: LaunchOptions,
  ): Promise<Browser> {
    switch (browserType) {
      case BrowserType.chromium:
        return await chromium.launch(options);
      case BrowserType.firefox:
        return await firefox.launch(options);
      case BrowserType.webkit:
        return await webkit.launch(options);
      default:
        throw new Error(`Broswer type not implemented`);
    }
  }
}
