import test, { expect } from "@playwright/test";
import {
  CONVERT_TO_SEC_COEFFICIENT,
  DECREASE_FREQ_LABEL,
  DEFAULT_UPDATE_FREQUENCY,
  FREQUENCY_ARIA_LABEL,
  INCREASE_FREQ_LABEL,
  MIN_UPDATE_FREQUENCY,
  SCALE_DEGREE_DATA_TEST_ID,
  UPDATE_FREQUENCY_INCREMENT,
} from "../src/constants";

test.describe.configure({ mode: "parallel" });

test("updates scale degree over time", async ({ page }) => {
  await page.goto("/");

  const degreeOutput = page.getByTestId(SCALE_DEGREE_DATA_TEST_ID);

  const initialDegree = await degreeOutput.textContent();

  await page.waitForTimeout(DEFAULT_UPDATE_FREQUENCY + 50);

  await expect(degreeOutput).not.toHaveText(initialDegree ?? "");
});

test("rapidly changes scale degrees when frequency is increased", async ({
  page,
}) => {
  await page.goto("/");

  const degreeOutput = page.getByTestId(SCALE_DEGREE_DATA_TEST_ID);
  const frequencyOutput = page.getByLabel(FREQUENCY_ARIA_LABEL);
  const increaseFreqButton = page.getByRole("button", {
    name: INCREASE_FREQ_LABEL,
  });

  for (let _ = DEFAULT_UPDATE_FREQUENCY; _ > 0; _ -= UPDATE_FREQUENCY_INCREMENT)
    await increaseFreqButton.click();

  await expect(frequencyOutput).toHaveText(
    String(MIN_UPDATE_FREQUENCY / CONVERT_TO_SEC_COEFFICIENT),
  );

  for (let _ = 0; _ < 5; _++) {
    const currentDegree = await degreeOutput.textContent();

    await expect
      .poll(async () => degreeOutput.textContent(), {
        timeout: 1200,
        intervals: [100],
      })
      .not.toBe(currentDegree);
  }
});

test("infrequently changes scale degrees when frequency is decreased", async ({
  page,
}) => {
  await page.goto("/");

  const degreeOutput = page.getByTestId(SCALE_DEGREE_DATA_TEST_ID);
  const frequencyOutput = page.getByLabel(FREQUENCY_ARIA_LABEL);
  const decreaseFreqButton = page.getByRole("button", {
    name: DECREASE_FREQ_LABEL,
  });

  for (
    let _ = DEFAULT_UPDATE_FREQUENCY;
    _ < 10000;
    _ += UPDATE_FREQUENCY_INCREMENT
  )
    await decreaseFreqButton.click();

  await expect(frequencyOutput).toHaveText(String("10"));

  const initialDegree = await degreeOutput.textContent();

  await page.waitForTimeout(CONVERT_TO_SEC_COEFFICIENT * 9);

  await expect(degreeOutput).toHaveText(initialDegree ?? "");
});
