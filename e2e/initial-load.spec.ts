import { test, expect } from "@playwright/test";
import { loadTestEnv } from "./helpers/load-env";
import {
  CHORD_QUALITY_LEGEND,
  DIMINISHED_DEGREE_LEGEND,
  SCALE_DEGREE_DATA_TEST_ID,
  TRAINING_MODE_LEGEND,
  UPDATE_FREQUENCY_LEGEND,
} from "../src/constants";

loadTestEnv();

test("has title", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(process.env.VITE_APP_TITLE as string);
});

test("displays all elements when the app loads", async ({ page }) => {
  await page.goto("/");

  const chordQualitySelector = page.getByRole("group", {
    name: CHORD_QUALITY_LEGEND,
  });
  const diminishedSelector = page.getByRole("group", {
    name: DIMINISHED_DEGREE_LEGEND,
  });
  const updateFrequencySelector = page.getByRole("group", {
    name: UPDATE_FREQUENCY_LEGEND,
  });
  const trainingModeSelector = page.getByRole("group", {
    name: TRAINING_MODE_LEGEND,
  });
  const scaleDegreeDisplay = page.getByTestId(SCALE_DEGREE_DATA_TEST_ID);

  await expect(chordQualitySelector).toBeVisible();
  await expect(diminishedSelector).toBeVisible();
  await expect(updateFrequencySelector).toBeVisible();
  await expect(trainingModeSelector).toBeVisible();
  await expect(scaleDegreeDisplay).toBeVisible();
});
