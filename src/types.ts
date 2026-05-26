import type { CHORDS, MAJOR, MINOR, TRIADS } from "./constants";

export type chordQuality = typeof MAJOR | typeof MINOR;
export type trainingMode = typeof CHORDS | typeof TRIADS;

export type InitialState = {
  chordQuality: chordQuality;
  includeDiminished: boolean;
  updateFrequency: number;
  trainingMode: trainingMode;
};
