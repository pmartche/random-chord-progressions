import { useAppSelector } from "../app/hooks";
import {
  CONVERT_TO_SEC_COEFFICIENT,
  DECREASE_FREQ_LABEL,
  INCREASE_FREQ_LABEL,
} from "../constants";
import {
  decreaseFrequency,
  increaseFrequency,
} from "../global/slices/scale-degree-slice";
import ControlsPanelButton from "./controls-panel-button";

const UpdateFrequencyDisplay = () => {
  const { updateFrequency } = useAppSelector(({ scaleDegree }) => scaleDegree);
  const freqInSec = updateFrequency / CONVERT_TO_SEC_COEFFICIENT;

  return (
    <div className="controls-panel">
      {freqInSec} sec
      <div className="button-div">
        <ControlsPanelButton
          label={DECREASE_FREQ_LABEL}
          action={decreaseFrequency}
        />
        <ControlsPanelButton
          label={INCREASE_FREQ_LABEL}
          action={increaseFrequency}
        />
      </div>
    </div>
  );
};

export default UpdateFrequencyDisplay;
