import test, { expect } from "@playwright/test";
import {
  DECREASE_FREQ_LABEL,
  DECREASE_FREQUENCY_KEY,
  FREQUENCY_ARIA_LABEL,
  INCREASE_FREQ_LABEL,
  INCREASE_FREQUENCY_KEY,
} from "../src/constants";

test.describe.configure({ mode: "parallel" });

test("updates frequency selector display when an increase / decrease button is pressed", async ({
  page,
}) => {
  await page.goto("/");

  const frequencyOutput = page.getByLabel(FREQUENCY_ARIA_LABEL);
  const initialFrequencyText = await frequencyOutput.textContent();

  const increaseFreqButton = page.getByRole("button", {
    name: INCREASE_FREQ_LABEL,
  });
  const decreaseFreqButton = page.getByRole("button", {
    name: DECREASE_FREQ_LABEL,
  });
  const initialFrequency = Number.parseInt(initialFrequencyText ?? "");

  await increaseFreqButton.click();
  await expect(frequencyOutput).toHaveText(String(initialFrequency - 1));

  await decreaseFreqButton.click();
  await expect(frequencyOutput).toHaveText(String(initialFrequency));
});

test("updates frequency output on keyboard hotkeys", async ({ page }) => {
  await page.goto("/");

  const frequencyOutput = page.getByLabel(FREQUENCY_ARIA_LABEL);
  const initialFrequencyText = await frequencyOutput.textContent();

  const initialFrequency = Number.parseInt(initialFrequencyText ?? "");

  await page.keyboard.press(INCREASE_FREQUENCY_KEY);
  await expect(frequencyOutput).toHaveText(String(initialFrequency - 1));

  await page.keyboard.press(DECREASE_FREQUENCY_KEY);
  await expect(frequencyOutput).toHaveText(String(initialFrequency));
});
