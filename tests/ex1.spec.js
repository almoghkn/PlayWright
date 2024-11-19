import { test, expect } from "@playwright/test";

test.describe.only("Exercises", () => {
  test("Exercise class", async ({ page }) => {
    await page.goto(
      "https://www.google.com/search?q=playwright&sca_esv=581353aac19f9e2d&source=hp&ei=RHk8Z4zpFPn-p84P_vyxkQQ&iflsig=AL9hbdgAAAAAZzyHVL4dYI9iWWjamvrQCWogsDni3dnP&ved=0ahUKEwiMm4yLqOiJAxV5_8kDHX5-LEIQ4dUDCA0&uact=5&oq=&gs_lp=Egdnd3Mtd2l6IgBIAFAAWABwAHgAkAEAmAEAoAEAqgEAuAEDyAEAmAIAoAIAmAMAkgcAoAcA&sclient=gws-wiz"
    );
    await page
      .getByRole("link", { name: "Playwright: Fast and reliable" })
      .click();
  });

  test("exercise 1", async ({ page }) => {
    await page.goto("https://devexpress.github.io/testcafe/example/");
    await page.getByTestId("remote-testing-checkbox").check();
    await page.getByTestId("reusing-js-code-checkbox").check();
    await page.getByTestId("parallel-testing-checkbox").check();
    await expect(locator).toBeChecked();
  });
});
