import { useEffect, useState } from "react";
import { TRIADS } from "../constants";
import { getDiminishedDegree } from "../functions";
import { useAppSelector } from "../app/hooks";

const ScaleDegreeDisplay = () => {
  const { chordQuality, includeDiminished, updateFrequency, trainingMode } =
    useAppSelector((state) => state.scaleDegree);
  const [scaleDegree, setScaleDegree] = useState("");

  useEffect(() => {
    const diminishedDegree = getDiminishedDegree(chordQuality);

    const generateScaleDegree = () => {
      let newScaleDegree: number;

      do {
        newScaleDegree = Math.floor(Math.random() * 7) + 1;
      } while (!includeDiminished && newScaleDegree === diminishedDegree);

      const triadStringLevel = Math.random() < 0.5 ? "↑" : "↓";

      setScaleDegree(
        `${trainingMode === TRIADS ? triadStringLevel : ""}${newScaleDegree}`,
      );
    };

    generateScaleDegree();

    const interval = setInterval(generateScaleDegree, updateFrequency);

    return () => clearInterval(interval);
  }, [chordQuality, includeDiminished, updateFrequency, trainingMode]);

  return <div className="scale-degree-display">{scaleDegree}</div>;
};

export default ScaleDegreeDisplay;
