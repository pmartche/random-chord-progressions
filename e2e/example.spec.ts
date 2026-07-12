import { test, expect } from "@playwright/test";
import { loadTestEnv } from "./helpers/load-env";

loadTestEnv();

test("has title", async ({ page }) => {
  await page.goto("/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(process.env.VITE_APP_TITLE as string);
});

// test("renders the app shell", async ({ page }) => {
//   await page.goto("/");

//   await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
// });
