import { beforeEach, describe, expect, it, vi } from "vitest";
import {
  CHORD_TO_DIM_DEGREE_TEST_CASES,
  INITIALIZE_OPTIONS_EXCLUDE_DIMINISHED_TEST_CASES,
  MAX_MATH_RANDOM_VALUE,
  MIN_MATH_RANDOM_VALUE,
  NEXT_ITEM_TEST_ARRAY,
  VALUE_TO_OMIT,
} from "./functions.test-data";
import type { chordQuality } from "./types";
import {
  getDiminishedDegree,
  getScaleDegreeOutput,
  getScaleDegreeOptions,
  getNextChordQuality,
  getNextTrainingMode,
  getNextItemInArray,
} from "./functions";
import {
  CHORD_QUALITIES,
  CHORDS,
  MAJOR,
  SCALE_DEGREES,
  TRAINING_MODES,
  TRIAD_OPTIONS,
  TRIADS,
} from "./constants";

describe("getDiminishedDegree", () => {
  it.each(CHORD_TO_DIM_DEGREE_TEST_CASES)(
    "returns chord degree %s as the diminished degree of the %s scale",
    (diminishedDegree: number, chordQuality: chordQuality) =>
      expect(getDiminishedDegree(chordQuality)).toEqual(diminishedDegree),
  );
});

describe("getScaleDegreeOptions", () => {
  it('returns all scale degrees in "Chords" mode with diminished', () => {
    expect(getScaleDegreeOptions(MAJOR, true, CHORDS)).toEqual(
      SCALE_DEGREES.map((degree) => degree.toString()),
    );
  });

  it('returns all scale degrees preceded by string level indicators in "Triads" mode', () => {
    const result = [];

    for (const triadOption of TRIAD_OPTIONS)
      for (const scaleDegree of SCALE_DEGREES)
        result.push(`${triadOption}${scaleDegree}`);

    expect(getScaleDegreeOptions(MAJOR, true, TRIADS)).toEqual(result);
  });

  it.each(INITIALIZE_OPTIONS_EXCLUDE_DIMINISHED_TEST_CASES)(
    "omits the %s degree (diminished) from results in %s scale",
    (diminishedDegree: number, chordQuality: chordQuality) =>
      expect(getScaleDegreeOptions(chordQuality, false, CHORDS)).not.toContain(
        diminishedDegree.toString(),
      ),
  );
});

describe("getScaleDegreeOutput", () => {
  const chordQuality = MAJOR;
  const trainingMode = CHORDS;
  const includeDiminished = true;

  beforeEach(() => vi.restoreAllMocks());

  it("keeps the smallest possible index within the bounds of the `options` array", () => {
    const valueToOmit = VALUE_TO_OMIT;
    vi.spyOn(Math, "random").mockReturnValue(MIN_MATH_RANDOM_VALUE);

    expect(
      getScaleDegreeOutput(
        chordQuality,
        includeDiminished,
        trainingMode,
        valueToOmit,
      ),
    ).toBeDefined();
  });

  it("keeps the largest possible index within the bounds of the `options` array", () => {
    const valueToOmit = VALUE_TO_OMIT;
    vi.spyOn(Math, "random").mockReturnValue(MAX_MATH_RANDOM_VALUE);

    expect(
      getScaleDegreeOutput(
        chordQuality,
        includeDiminished,
        trainingMode,
        valueToOmit,
      ),
    ).toBeDefined();
  });

  it("omits `valueToOmit` from results", () => {
    vi.spyOn(Math, "random").mockReturnValue(MIN_MATH_RANDOM_VALUE);
    const valueToOmit = SCALE_DEGREES[0].toString();

    expect(
      getScaleDegreeOutput(
        chordQuality,
        includeDiminished,
        trainingMode,
        valueToOmit,
      ),
    ).toEqual(SCALE_DEGREES[1].toString());
  });
});

describe("getNextItemInArray", () => {
  it("returns the next item in an array when the current item is not last in the array", () => {
    const currentItem = NEXT_ITEM_TEST_ARRAY[0];

    expect(getNextItemInArray(NEXT_ITEM_TEST_ARRAY, currentItem)).toEqual(
      NEXT_ITEM_TEST_ARRAY[1],
    );
  });

  it("returns the first item in an array when the current item is last in the array", () => {
    const currentItem = NEXT_ITEM_TEST_ARRAY[NEXT_ITEM_TEST_ARRAY.length - 1];

    expect(getNextItemInArray(NEXT_ITEM_TEST_ARRAY, currentItem)).toEqual(
      NEXT_ITEM_TEST_ARRAY[0],
    );
  });
});

describe("getNextChordQuality", () => {
  it("returns the next item in `CHORD_QUALITIES` array when the current item is not last in the array", () => {
    const currentChordQuality = CHORD_QUALITIES[0];

    expect(getNextChordQuality(currentChordQuality)).toEqual(
      CHORD_QUALITIES[1],
    );
  });

  it("returns the first item in `CHORD_QUALITIES` array when the current item is last in the array", () => {
    const currentChordQuality = CHORD_QUALITIES[CHORD_QUALITIES.length - 1];

    expect(getNextChordQuality(currentChordQuality)).toEqual(
      CHORD_QUALITIES[0],
    );
  });
});

describe("getNextTrainingMode", () => {
  it("returns the next item in `TRAINING_MODES` array when the current item is not last in the array", () => {
    const currentTrainingMode = TRAINING_MODES[0];

    expect(getNextTrainingMode(currentTrainingMode)).toEqual(TRAINING_MODES[1]);
  });

  it("returns the first item in `TRAINING_MODES` array when the current item is last in the array", () => {
    const currentTrainingMode = TRAINING_MODES[TRAINING_MODES.length - 1];

    expect(getNextTrainingMode(currentTrainingMode)).toEqual(TRAINING_MODES[0]);
  });
});
