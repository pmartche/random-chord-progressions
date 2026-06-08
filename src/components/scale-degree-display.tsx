import { useEffect, useRef, useState } from "react";
import { getScaleDegreeOutput } from "../functions";
import { useAppSelector } from "../app/hooks";

const ScaleDegreeDisplay = () => {
  const { chordQuality, includeDiminished, updateFrequency, trainingMode } =
    useAppSelector(({ scaleDegree }) => scaleDegree);
  const [output, setOutput] = useState("");
  const outputRef = useRef("");

  useEffect(() => {
    const generateOutput = () => {
      const newOutput = getScaleDegreeOutput(
        chordQuality,
        includeDiminished,
        trainingMode,
        outputRef.current,
      );

      outputRef.current = newOutput;
      setOutput(newOutput);
    };

    generateOutput();

    const interval = setInterval(generateOutput, updateFrequency);

    return () => clearInterval(interval);
  }, [chordQuality, includeDiminished, updateFrequency, trainingMode]);

  return <div className="scale-degree-display">{output}</div>;
};

export default ScaleDegreeDisplay;
