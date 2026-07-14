import test, { expect } from "@playwright/test";
import {
  DIMINISHED_DEGREE_ARIA_LABEL,
  DIMINISHED_EXCLUDED_LABEL,
  DIMINISHED_INCLUDED_LABEL,
  EXCLUDE_DIMINISHED_LABEL,
  INCLUDE_DIMINISHED_LABEL,
  TOGGLE_DIMINISHED_KEY,
} from "../src/constants";

test.describe.configure({ mode: "parallel" });

test("updates diminished display when a diminished button is pressed", async ({
  page,
}) => {
  await page.goto("/");

  const diminishedOutput = page.getByLabel(DIMINISHED_DEGREE_ARIA_LABEL);
  const includeDimButton = page.getByRole("button", {
    name: INCLUDE_DIMINISHED_LABEL,
  });
  const excludeDimButton = page.getByRole("button", {
    name: EXCLUDE_DIMINISHED_LABEL,
  });

  await excludeDimButton.click();

  await includeDimButton.click();
  await expect(diminishedOutput).toHaveText(DIMINISHED_INCLUDED_LABEL);

  await excludeDimButton.click();
  await expect(diminishedOutput).toHaveText(DIMINISHED_EXCLUDED_LABEL);
});

test("updates diminished output on keyboard hotkeys", async ({ page }) => {
  await page.goto("/");

  const diminishedOutput = page.getByLabel(DIMINISHED_DEGREE_ARIA_LABEL);
  const excludeDimButton = page.getByRole("button", {
    name: EXCLUDE_DIMINISHED_LABEL,
  });

  await excludeDimButton.click();

  await page.keyboard.press(TOGGLE_DIMINISHED_KEY);
  await expect(diminishedOutput).toHaveText(DIMINISHED_INCLUDED_LABEL);

  await page.keyboard.press(TOGGLE_DIMINISHED_KEY);
  await expect(diminishedOutput).toHaveText(DIMINISHED_EXCLUDED_LABEL);
});
