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
import type { ChordQuality, DiminishedDegree, TrainingMode } from "./types";

const chordQualityToDiminishedDegreeMapper: Record<
  ChordQuality,
  DiminishedDegree
> = {
  [MAJOR]: DIMINISHED_DEGREE_OF_MAJOR,
  [MINOR]: DIMINISHED_DEGREE_OF_MINOR,
};

export const getDiminishedDegree = (
  chordQuality: ChordQuality,
): DiminishedDegree => chordQualityToDiminishedDegreeMapper[chordQuality];
// TODO: provide return type
export const getScaleDegreeOptions = (
  chordQuality: ChordQuality,
  includeDiminished: boolean,
  trainingMode: TrainingMode,
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
  chordQuality: ChordQuality,
  includeDiminished: boolean,
  trainingMode: TrainingMode,
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

export const getNextChordQuality = (chordQuality: ChordQuality): ChordQuality =>
  getNextItemInArray(CHORD_QUALITIES, chordQuality);

export const getNextTrainingMode = (trainingMode: TrainingMode): TrainingMode =>
  getNextItemInArray(TRAINING_MODES, trainingMode);
