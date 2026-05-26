import { useAppSelector } from "../app/hooks";
import { CHORD_QUALITIES } from "../constants";
import { changeChordQuality } from "../global/slices/scale-degree-slice";
import type { chordQuality } from "../types";
import ControlsPanelButton from "./controls-panel-button";

const ChordQualitySelector = () => {
  const { chordQuality } = useAppSelector(({ scaleDegree }) => scaleDegree);

  return (
    <div className="controls-panel">
      {chordQuality}
      <div className="button-div">
        {CHORD_QUALITIES.map((chord) => (
          <ControlsPanelButton
            key={chord}
            label={chord}
            action={changeChordQuality}
            payload={chord as chordQuality}
          />
        ))}
      </div>
    </div>
  );
};

export default ChordQualitySelector;
