import { useAppSelector } from "../app/hooks";
import {
  DIMINISHED_EXCLUDED_LABEL,
  DIMINISHED_INCLUDED_LABEL,
  EXCLUDE_DIMINISHED_LABEL,
  INCLUDE_DIMINISHED_LABEL,
} from "../constants";
import ControlsPanelButton from "./controls-panel-button";
import {
  excludeDiminished,
  includeDiminished as includeDiminishedReducer,
} from "../global/slices/scale-degree-slice";

const DiminishedSelector = () => {
  const { includeDiminished } = useAppSelector(
    ({ scaleDegree }) => scaleDegree,
  );

  return (
    <div className="controls-panel">
      {includeDiminished
        ? DIMINISHED_INCLUDED_LABEL
        : DIMINISHED_EXCLUDED_LABEL}
      <div className="button-div">
        <ControlsPanelButton
          label={INCLUDE_DIMINISHED_LABEL}
          action={includeDiminishedReducer}
        />
        <ControlsPanelButton
          label={EXCLUDE_DIMINISHED_LABEL}
          action={excludeDiminished}
        />
      </div>
    </div>
  );
};

export default DiminishedSelector;
