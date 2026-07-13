import test, { expect } from "@playwright/test";
import { CHORD_QUALITY_ARIA_LABEL, MAJOR, MINOR } from "../src/constants";

test("updates chord quality display when a chord quality button is pressed", async ({
  page,
}) => {
  await page.goto("/");

  const chordQualityOutput = page.getByLabel(CHORD_QUALITY_ARIA_LABEL);
  const majorScaleButton = page.getByRole("button", { name: MAJOR });
  const minorScaleButton = page.getByRole("button", { name: MINOR });

  await minorScaleButton.click();

  await majorScaleButton.click();
  await expect(chordQualityOutput).toHaveText(MAJOR);

  await minorScaleButton.click();
  await expect(chordQualityOutput).toHaveText(MINOR);
});
