import {
  DIMINISHED_DEGREE_OF_MAJOR,
  DIMINISHED_DEGREE_OF_MINOR,
  MAJOR,
  MINOR,
} from "./constants";
import type { chordQuality } from "./types";

export const CHORD_TO_DIM_DEGREE_TEST_CASES: [number, chordQuality][] = [
  [DIMINISHED_DEGREE_OF_MAJOR, MAJOR],
  [DIMINISHED_DEGREE_OF_MINOR, MINOR],
];

export const INITIALIZE_OPTIONS_EXCLUDE_DIMINISHED_TEST_CASES: [
  number,
  chordQuality,
][] = [
  [DIMINISHED_DEGREE_OF_MAJOR, MAJOR],
  [DIMINISHED_DEGREE_OF_MINOR, MINOR],
];

export const VALUE_TO_OMIT = "2";

export const MIN_MATH_RANDOM_VALUE = 0;
export const MAX_MATH_RANDOM_VALUE = 1 - 2 ** -53;
