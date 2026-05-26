import {
  DIMINISHED_DEGREE_OF_MAJOR,
  DIMINISHED_DEGREE_OF_MINOR,
  MAJOR,
  MINOR,
} from "./constants";
import type { chordQuality } from "./types";

const chordQualityToDiminishedDegreeMapper = {
  [MAJOR]: DIMINISHED_DEGREE_OF_MAJOR,
  [MINOR]: DIMINISHED_DEGREE_OF_MINOR,
};

export const getDiminishedDegree = (chordQuality: chordQuality) =>
  chordQualityToDiminishedDegreeMapper[chordQuality];
