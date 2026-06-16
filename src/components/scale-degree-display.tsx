import { useEffect, useRef, useState } from "react";
import { getScaleDegreeOutput } from "../functions";
import { useAppSelector } from "../app/hooks";
import { useDispatch } from "react-redux";
import type { ActionCreatorWithoutPayload } from "@reduxjs/toolkit";
import {
  DECREASE_FREQUENCY_KEY,
  INCREASE_FREQUENCY_KEY,
  TOGGLE_CHORD_QUALITY_KEY,
  TOGGLE_DIMINISHED_KEY,
  TOGGLE_TRAINING_MODE,
} from "../constants";
import {
  decreaseFrequency,
  increaseFrequency,
  setNextChordQuality,
  setNextTrainingMode,
  toggleDiminished,
} from "../global/slices/scale-degree-slice";

const keyPressToReducerMapper: Record<string, ActionCreatorWithoutPayload> = {
  [TOGGLE_CHORD_QUALITY_KEY]: setNextChordQuality,
  [TOGGLE_DIMINISHED_KEY]: toggleDiminished,
  [TOGGLE_TRAINING_MODE]: setNextTrainingMode,
  [DECREASE_FREQUENCY_KEY]: decreaseFrequency,
  [INCREASE_FREQUENCY_KEY]: increaseFrequency,
};

const ScaleDegreeDisplay = () => {
  const { chordQuality, includeDiminished, updateFrequency, trainingMode } =
    useAppSelector(({ scaleDegree }) => scaleDegree);
  const [output, setOutput] = useState("");
  const outputRef = useRef("");
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyDown = ({ key }: { key: string }): void => {
      const reducer: ActionCreatorWithoutPayload | undefined =
        keyPressToReducerMapper?.[key];

      if (reducer !== undefined) dispatch(reducer());
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [dispatch]);

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
