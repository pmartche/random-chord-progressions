import type {
  ActionCreatorWithOptionalPayload,
  ActionCreatorWithoutPayload,
  ActionCreatorWithPayload,
} from "@reduxjs/toolkit";
import type {
  CHORD_QUALITIES,
  DIMINISHED_DEGREES,
  TRAINING_MODES,
} from "./constants";

export type chordQuality = (typeof CHORD_QUALITIES)[number];
export type trainingMode = (typeof TRAINING_MODES)[number];
export type diminishedDegree = (typeof DIMINISHED_DEGREES)[number];

export type InitialState = {
  chordQuality: chordQuality;
  includeDiminished: boolean;
  updateFrequency: number;
  trainingMode: trainingMode;
};

export type ControlsPanelButtonProps<P = unknown> =
  | { label: string; action: ActionCreatorWithoutPayload; payload?: never }
  | { label: string; action: ActionCreatorWithPayload<P>; payload: P }
  | { label: string; action: ActionCreatorWithOptionalPayload<P>; payload?: P };
