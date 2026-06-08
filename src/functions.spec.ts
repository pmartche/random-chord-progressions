import { beforeEach, describe, expect, it, vi } from "vitest";
import {
  CHORD_TO_DIM_DEGREE_TEST_CASES,
  INITIALIZE_OPTIONS_EXCLUDE_DIMINISHED_TEST_CASES,
  MAX_MATH_RANDOM_VALUE,
  MIN_MATH_RANDOM_VALUE,
  VALUE_TO_OMIT,
} from "./functions.test-data";
import type { chordQuality } from "./types";
import {
  getDiminishedDegree,
  getScaleDegreeOutput,
  getScaleDegreeOptions,
} from "./functions";
import {
  CHORDS,
  MAJOR,
  SCALE_DEGREES,
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

describe("initializeOptions", () => {
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
