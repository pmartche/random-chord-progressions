import { useMemo } from "react";
import { useAppSelector } from "../app/hooks";
import {
  CONVERT_TO_SEC_COEFFICIENT,
  DECREASE_FREQ_LABEL,
  FREQUENCY_ARIA_LABEL,
  INCREASE_FREQ_LABEL,
  UPDATE_FREQUENCY_LEGEND,
} from "../constants";
import {
  decreaseFrequency,
  increaseFrequency,
} from "../global/slices/scale-degree-slice";
import type { OptionsSelectorProps } from "../types";
import OptionsSelector from "./options-selector";

const UpdateFrequencySelector = () => {
  const { updateFrequency } = useAppSelector(({ scaleDegree }) => scaleDegree);
  const freqInSec = String(updateFrequency / CONVERT_TO_SEC_COEFFICIENT);
  const selectorProps = useMemo<OptionsSelectorProps>(
    () => ({
      screenReaderLegend: UPDATE_FREQUENCY_LEGEND,
      output: freqInSec,
      ariaLabel: FREQUENCY_ARIA_LABEL,
      buttonPropsArray: [
        {
          buttonLabel: INCREASE_FREQ_LABEL,
          action: increaseFrequency,
        },
        {
          buttonLabel: DECREASE_FREQ_LABEL,
          action: decreaseFrequency,
        },
      ],
    }),
    [freqInSec],
  );

  return <OptionsSelector {...selectorProps} />;
};

export default UpdateFrequencySelector;
