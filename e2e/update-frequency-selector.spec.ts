import test, { expect } from "@playwright/test";
import {
  DECREASE_FREQ_LABEL,
  FREQUENCY_ARIA_LABEL,
  INCREASE_FREQ_LABEL,
} from "../src/constants";

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
