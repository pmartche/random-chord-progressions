import { useMemo } from "react";
import { useAppSelector } from "../app/hooks";
import {
  CHORDS,
  TRAINING_MODE_ARIA_LABEL,
  TRAINING_MODE_LEGEND,
  TRIADS,
} from "../constants";
import { changeTrainingMode } from "../global/slices/scale-degree-slice";
import { type OptionsSelectorProps } from "../types";
import OptionsSelector from "./options-selector";
import type { ActionCreatorWithPayload } from "@reduxjs/toolkit";

const TrainingModeSelector = () => {
  const { trainingMode } = useAppSelector(({ scaleDegree }) => scaleDegree);
  const selectorProps = useMemo<OptionsSelectorProps>(
    () => ({
      screenReaderLegend: TRAINING_MODE_LEGEND,
      output: trainingMode,
      ariaLabel: TRAINING_MODE_ARIA_LABEL,
      buttonPropsArray: [
        {
          buttonLabel: CHORDS,
          ariaPressed: trainingMode === CHORDS,
          action: changeTrainingMode as ActionCreatorWithPayload<unknown>,
          payload: CHORDS,
        },
        {
          buttonLabel: TRIADS,
          ariaPressed: trainingMode === TRIADS,
          action: changeTrainingMode as ActionCreatorWithPayload<unknown>,
          payload: TRIADS,
        },
      ],
    }),
    [trainingMode],
  );

  return <OptionsSelector {...selectorProps} />;
};

export default TrainingModeSelector;
