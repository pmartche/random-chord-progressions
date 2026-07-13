import test, { expect } from "@playwright/test";
import { CHORDS, TRAINING_MODE_ARIA_LABEL, TRIADS } from "../src/constants";

test("updates training display when a training mode button is pressed", async ({
  page,
}) => {
  await page.goto("/");

  const trainingModeOutput = page.getByLabel(TRAINING_MODE_ARIA_LABEL);
  const chordsButton = page.getByRole("button", { name: CHORDS });
  const triadsButton = page.getByRole("button", { name: TRIADS });

  await chordsButton.click();

  await triadsButton.click();
  await expect(trainingModeOutput).toHaveText(TRIADS);

  await chordsButton.click();
  await expect(trainingModeOutput).toHaveText(CHORDS);
});
