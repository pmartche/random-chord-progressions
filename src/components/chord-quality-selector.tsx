import { useMemo } from "react";
import { useAppSelector } from "../app/hooks";
import {
  CHORD_QUALITY_ARIA_LABEL,
  CHORD_QUALITY_LEGEND,
  MAJOR,
  MINOR,
} from "../constants";
import { changeChordQuality } from "../global/slices/scale-degree-slice";
import type { OptionsSelectorProps } from "../types";
import type { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import OptionsSelector from "./options-selector";

const ChordQualitySelector = () => {
  const { chordQuality } = useAppSelector(({ scaleDegree }) => scaleDegree);
  const selectorProps = useMemo<OptionsSelectorProps>(
    () => ({
      screenReaderLegend: CHORD_QUALITY_LEGEND,
      output: chordQuality,
      ariaLabel: CHORD_QUALITY_ARIA_LABEL,
      buttonPropsArray: [
        {
          buttonLabel: MAJOR,
          ariaPressed: chordQuality === MAJOR,
          action: changeChordQuality as ActionCreatorWithPayload<unknown>,
          payload: MAJOR,
        },
        {
          buttonLabel: MINOR,
          ariaPressed: chordQuality === MINOR,
          action: changeChordQuality as ActionCreatorWithPayload<unknown>,
          payload: MINOR,
        },
      ],
    }),
    [chordQuality],
  );
  return <OptionsSelector {...selectorProps} />;
};

export default ChordQualitySelector;
