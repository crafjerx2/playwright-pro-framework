import { test, expect } from "@playwright/test";
import { LoginPage } from "../../src/pages/LoginPage";

test.describe("Login page test suite", () => {
  test(
    "Login page should be load successfully",
    {
      tag: "@smoke",
    },
    async ({ page }) => {
      // Arrange & Act
      const login = new LoginPage(page);
      await login.open();

      // Assert
      const logo = await login.isLogoLoaded();
      const title = await login.getTitle();

      await expect(logo).toBeVisible();
      expect(title).toContain("Swag Labs");
    },
  );
});
