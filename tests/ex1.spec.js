import { test, expect } from "@playwright/test";

test.describe.only("Exercises", () => {
  test("Exercise class", async ({ page }) => {
    await page.goto("https://www.google.com/search?q=playwright&sca_esv=581353aac19f9e2d&source=hp&ei=RHk8Z4zpFPn-p84P_vyxkQQ&iflsig=AL9hbdgAAAAAZzyHVL4dYI9iWWjamvrQCWogsDni3dnP&ved=0ahUKEwiMm4yLqOiJAxV5_8kDHX5-LEIQ4dUDCA0&uact=5&oq=&gs_lp=Egdnd3Mtd2l6IgBIAFAAWABwAHgAkAEAmAEAoAEAqgEAuAEDyAEAmAIAoAIAmAMAkgcAoAcA&sclient=gws-wiz");
    await page.getByRole("link", { name: "Playwright: Fast and reliable" }).click();
  });

  test("Exercise 1", async ({ page }) => {
    await page.goto("https://devexpress.github.io/testcafe/example/");
    const locatorArray = [
      "remote-testing-checkbox",
      "reusing-js-code-checkbox",
      "parallel-testing-checkbox",
    ];
    for (let locatorString of locatorArray) {
      await page.getByTestId(locatorString).check();
      await expect(page.getByTestId(locatorString)).toBeChecked();
    }
  });

  test("Exercise 2", async ({ page }) => {
    await page.goto("https://devexpress.github.io/testcafe/example/");
    await page.getByTestId("windows-radio").check();
    await expect(page.getByTestId("windows-radio")).toBeChecked();
  });

  test("Exercise 3", async ({ page }) => {
    await page.goto("https://devexpress.github.io/testcafe/example/");
    await page.getByTestId('preferred-interface-select').selectOption('JavaScript API');
    await expect(page.getByTestId("preferred-interface-select")).toHaveValue("JavaScript API");
  });

});
