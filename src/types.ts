import type {
  ActionCreatorWithOptionalPayload,
  ActionCreatorWithoutPayload,
  ActionCreatorWithPayload,
} from "@reduxjs/toolkit";
import type {
  ARIA_LABELS,
  BUTTON_LABELS,
  CHORD_QUALITIES,
  DIMINISHED_DEGREES,
  SCREEN_READER_LEGENDS,
  TRAINING_MODES,
} from "./constants";

export type ChordQuality = (typeof CHORD_QUALITIES)[number];
export type TrainingMode = (typeof TRAINING_MODES)[number];
export type DiminishedDegree = (typeof DIMINISHED_DEGREES)[number];
type ScreenReaderLegend = (typeof SCREEN_READER_LEGENDS)[number];
type AriaLabel = (typeof ARIA_LABELS)[number];
type ButtonLabel = (typeof BUTTON_LABELS)[number];

export type InitialState = {
  chordQuality: ChordQuality;
  includeDiminished: boolean;
  updateFrequency: number;
  trainingMode: TrainingMode;
};

type ControlsPanelButtonBaseProps = {
  buttonLabel: ButtonLabel;
  ariaPressed?: boolean;
};

export type ControlsPanelButtonProps<P = unknown> =
  ControlsPanelButtonBaseProps &
    (
      | { action: ActionCreatorWithoutPayload; payload?: never }
      | { action: ActionCreatorWithPayload<P>; payload: P }
      | { action: ActionCreatorWithOptionalPayload<P>; payload?: P }
    );

export type OptionsSelectorProps = {
  screenReaderLegend: ScreenReaderLegend;
  output: string;
  ariaLabel: AriaLabel;
  buttonPropsArray: ControlsPanelButtonProps[];
};
