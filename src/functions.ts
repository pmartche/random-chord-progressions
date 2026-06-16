import {
  CHORD_QUALITIES,
  CHORDS,
  DIMINISHED_DEGREE_OF_MAJOR,
  DIMINISHED_DEGREE_OF_MINOR,
  MAJOR,
  MINOR,
  SCALE_DEGREES,
  TRAINING_MODES,
  TRIAD_OPTIONS,
  TRIADS,
} from "./constants";
import type { chordQuality, diminishedDegree, trainingMode } from "./types";

const chordQualityToDiminishedDegreeMapper: Record<
  chordQuality,
  diminishedDegree
> = {
  [MAJOR]: DIMINISHED_DEGREE_OF_MAJOR,
  [MINOR]: DIMINISHED_DEGREE_OF_MINOR,
};

export const getDiminishedDegree = (
  chordQuality: chordQuality,
): diminishedDegree => chordQualityToDiminishedDegreeMapper[chordQuality];
// TODO: provide return type
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
// TODO: provide return type
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

export const getNextItemInArray = <T>(
  items: readonly T[],
  currentItem: T,
): T => {
  const index = items.findIndex((item) => item === currentItem);

  return items[(index + 1) % items.length];
};

export const getNextChordQuality = (chordQuality: chordQuality): chordQuality =>
  getNextItemInArray(CHORD_QUALITIES, chordQuality);

export const getNextTrainingMode = (trainingMode: trainingMode): trainingMode =>
  getNextItemInArray(TRAINING_MODES, trainingMode);
