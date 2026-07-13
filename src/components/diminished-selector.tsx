import { useAppSelector } from "../app/hooks";
import {
  DIMINISHED_DEGREE_ARIA_LABEL,
  DIMINISHED_DEGREE_LEGEND,
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
      screenReaderLegend: DIMINISHED_DEGREE_LEGEND,
      output: includeDiminished
        ? DIMINISHED_INCLUDED_LABEL
        : DIMINISHED_EXCLUDED_LABEL,
      ariaLabel: DIMINISHED_DEGREE_ARIA_LABEL,
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
