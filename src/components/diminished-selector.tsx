import { useAppSelector } from "../app/hooks";
import {
  CHORD_QUALITY_ARIA_LABEL,
  CHORD_QUALITY_LEGEND,
  DIMINISHED_EXCLUDED_LABEL,
  DIMINISHED_INCLUDED_LABEL,
  EXCLUDE_DIMINISHED_LABEL,
  INCLUDE_DIMINISHED_LABEL,
} from "../constants";
import {
  excludeDiminished,
  includeDiminished as includeDiminishedReducer,
} from "../global/slices/scale-degree-slice";
import type { OptionsSelectorProps } from "../types";
import { useMemo } from "react";
import OptionsSelector from "./options-selector";

const DiminishedSelector = () => {
  const { includeDiminished } = useAppSelector(
    ({ scaleDegree }) => scaleDegree,
  );
  const selectorProps = useMemo<OptionsSelectorProps>(
    () => ({
      screenReaderLegend: CHORD_QUALITY_LEGEND,
      output: includeDiminished
        ? DIMINISHED_INCLUDED_LABEL
        : DIMINISHED_EXCLUDED_LABEL,
      ariaLabel: CHORD_QUALITY_ARIA_LABEL,
      buttonPropsArray: [
        {
          buttonLabel: INCLUDE_DIMINISHED_LABEL,
          ariaPressed: includeDiminished,
          action: includeDiminishedReducer,
        },
        {
          buttonLabel: EXCLUDE_DIMINISHED_LABEL,
          ariaPressed: !includeDiminished,
          action: excludeDiminished,
        },
      ],
    }),
    [includeDiminished],
  );

  return <OptionsSelector {...selectorProps} />;
};

export default DiminishedSelector;
