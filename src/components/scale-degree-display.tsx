import { useEffect, useRef, useState } from "react";
import { getScaleDegreeOutput } from "../functions";
import { useAppSelector } from "../app/hooks";
import { useDispatch } from "react-redux";
import type { ActionCreatorWithoutPayload } from "@reduxjs/toolkit";
import {
  DECREASE_FREQUENCY_KEY,
  INCREASE_FREQUENCY_KEY,
  SCALE_DEGREE_DATA_TEST_ID,
  SCALE_DEGREE_HEADING,
  SCALE_DEGREE_HEADING_ID,
  SCALE_DEGREE_OUTPUT_ARIA_LABEL,
  SCALE_DEGREE_SECTION_ARIA_LABELLEDBY,
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

  return (
    <section
      className="scale-degree-display"
      aria-labelledby={SCALE_DEGREE_SECTION_ARIA_LABELLEDBY}
    >
      <h2 id={SCALE_DEGREE_HEADING_ID} className="sr-only">
        {SCALE_DEGREE_HEADING}
      </h2>
      <output
        aria-label={SCALE_DEGREE_OUTPUT_ARIA_LABEL}
        data-testid={SCALE_DEGREE_DATA_TEST_ID}
      >
        {output}
      </output>
    </section>
  );
};

export default ScaleDegreeDisplay;
