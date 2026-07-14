import { createSlice } from "@reduxjs/toolkit";
import {
  CHORDS,
  DEFAULT_UPDATE_FREQUENCY,
  MAJOR,
  MIN_UPDATE_FREQUENCY,
  UPDATE_FREQUENCY_INCREMENT,
} from "../../constants";
import type { ChordQuality, InitialState, TrainingMode } from "../../types";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getNextChordQuality, getNextTrainingMode } from "../../functions";

const initialState: InitialState = {
  chordQuality: MAJOR,
  includeDiminished: true,
  updateFrequency: DEFAULT_UPDATE_FREQUENCY,
  trainingMode: CHORDS,
};

export const scaleDegreeSlice = createSlice({
  name: "scaleDegree",
  initialState,
  reducers: {
    changeChordQuality: (state, action: PayloadAction<ChordQuality>) => {
      state.chordQuality = action.payload;
    },
    setNextChordQuality: (state) => {
      state.chordQuality = getNextChordQuality(state.chordQuality);
    },
    includeDiminished: (state) => {
      state.includeDiminished = true;
    },
    excludeDiminished: (state) => {
      state.includeDiminished = false;
    },
    toggleDiminished: (state) => {
      state.includeDiminished = !state.includeDiminished;
    },
    increaseFrequency: (state) => {
      const { updateFrequency } = state;
      state.updateFrequency = Math.max(
        updateFrequency - UPDATE_FREQUENCY_INCREMENT,
        MIN_UPDATE_FREQUENCY,
      );
    },
    decreaseFrequency: (state) => {
      state.updateFrequency += MIN_UPDATE_FREQUENCY;
    },
    changeTrainingMode: (state, action: PayloadAction<TrainingMode>) => {
      state.trainingMode = action.payload;
    },
    setNextTrainingMode: (state) => {
      state.trainingMode = getNextTrainingMode(state.trainingMode);
    },
  },
});

export const {
  changeChordQuality,
  setNextChordQuality,
  includeDiminished,
  excludeDiminished,
  toggleDiminished,
  increaseFrequency,
  decreaseFrequency,
  changeTrainingMode,
  setNextTrainingMode,
} = scaleDegreeSlice.actions;

export default scaleDegreeSlice.reducer;
