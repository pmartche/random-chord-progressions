import { useAppSelector } from "../app/hooks";
import { TRAINING_MODES } from "../constants";
import { changeTrainingMode } from "../global/slices/scale-degree-slice";
import type { trainingMode } from "../types";
import ControlsPanelButton from "./controls-panel-button";

const TrainingModeSelector = () => {
  const { trainingMode } = useAppSelector(({ scaleDegree }) => scaleDegree);

  return (
    <div className="controls-panel">
      {trainingMode}
      <div className="button-div">
        {TRAINING_MODES.map((mode) => (
          <ControlsPanelButton
            key={mode}
            label={mode}
            action={changeTrainingMode}
            payload={mode as trainingMode}
          />
        ))}
      </div>
    </div>
  );
};

export default TrainingModeSelector;
