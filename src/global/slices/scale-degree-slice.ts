import { createSlice } from "@reduxjs/toolkit";
import {
  CHORDS,
  DEFAULT_UPDATE_FREQUENCY,
  MAJOR,
  MIN_UPDATE_FREQUENCY,
  UPDATE_FREQUENCY_INCREMENT,
} from "../../constants";
import type { chordQuality, InitialState, trainingMode } from "../../types";
import type { PayloadAction } from "@reduxjs/toolkit";

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
    changeChordQuality: (state, action: PayloadAction<chordQuality>) => {
      state.chordQuality = action.payload;
    },
    includeDiminished: (state) => {
      state.includeDiminished = true;
    },
    excludeDiminished: (state) => {
      state.includeDiminished = false;
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
    changeTrainingMode: (state, action: PayloadAction<trainingMode>) => {
      state.trainingMode = action.payload;
    },
  },
});

export const {
  changeChordQuality,
  includeDiminished,
  excludeDiminished,
  increaseFrequency,
  decreaseFrequency,
  changeTrainingMode,
} = scaleDegreeSlice.actions;

export default scaleDegreeSlice.reducer;
