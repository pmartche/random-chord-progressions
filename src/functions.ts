import {
  CHORDS,
  DIMINISHED_DEGREE_OF_MAJOR,
  DIMINISHED_DEGREE_OF_MINOR,
  MAJOR,
  MINOR,
  SCALE_DEGREES,
  TRIAD_OPTIONS,
  TRIADS,
} from "./constants";
import type { chordQuality, trainingMode } from "./types";

const chordQualityToDiminishedDegreeMapper = {
  [MAJOR]: DIMINISHED_DEGREE_OF_MAJOR,
  [MINOR]: DIMINISHED_DEGREE_OF_MINOR,
};

export const getDiminishedDegree = (chordQuality: chordQuality) =>
  chordQualityToDiminishedDegreeMapper[chordQuality];

export const getScaleDegreeOptions = (
  chordQuality: chordQuality,
  includeDiminished: boolean,
  trainingMode: trainingMode,
) => {
  const degreeToOmit = includeDiminished
    ? null
    : getDiminishedDegree(chordQuality).toString();

  const filteredScaleDegrees = SCALE_DEGREES.map((degree) =>
    degree.toString(),
  ).filter((degree) => degree !== degreeToOmit);

  switch (trainingMode) {
    case TRIADS:
      return TRIAD_OPTIONS.flatMap((triadOption) =>
        filteredScaleDegrees.map(
          (scaleDegree) => `${triadOption}${scaleDegree}`,
        ),
      );

    case CHORDS:
    default:
      return filteredScaleDegrees;
  }
};

export const getScaleDegreeOutput = (
  chordQuality: chordQuality,
  includeDiminished: boolean,
  trainingMode: trainingMode,
  valueToOmit: string,
) => {
  let options: string[] = getScaleDegreeOptions(
    chordQuality,
    includeDiminished,
    trainingMode,
  );

  options = options.filter((option) => option !== valueToOmit);

  const randomIndex = Math.floor(Math.random() * options.length);

  return options[randomIndex];
};
