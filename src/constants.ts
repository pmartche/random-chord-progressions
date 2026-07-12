// Training modes
export const CHORDS = "Chords";
export const TRIADS = "Triads";
export const TRAINING_MODES = [CHORDS, TRIADS] as const;
export const TRAINING_MODE_LEGEND = "Training mode";
export const TRAINING_MODE_ARIA_LABEL = "Selected training mode";

// Chord qualities
export const MAJOR = "Major";
export const MINOR = "Minor";
export const CHORD_QUALITIES = [MAJOR, MINOR] as const;
export const CHORD_QUALITY_LEGEND = "Chord quality";
export const CHORD_QUALITY_ARIA_LABEL = "Selected chord quality";

// Diminished scale degrees
export const DIMINISHED_DEGREE_OF_MAJOR = 7;
export const DIMINISHED_DEGREE_OF_MINOR = 2;
export const DIMINISHED_DEGREES = [
  DIMINISHED_DEGREE_OF_MAJOR,
  DIMINISHED_DEGREE_OF_MINOR,
] as const;
export const DIMINISHED_INCLUDED_LABEL = "Dimin. Included";
export const DIMINISHED_EXCLUDED_LABEL = "Dimin. Excluded";
export const INCLUDE_DIMINISHED_LABEL = "Include";
export const EXCLUDE_DIMINISHED_LABEL = "Exclude";
export const DIMINISHED_LABELS = [
  INCLUDE_DIMINISHED_LABEL,
  EXCLUDE_DIMINISHED_LABEL,
];
export const DIMINISHED_DEGRE_LEGEND = "Diminished degree";
export const DIMINISHED_DEGRE_ARIA_LABEL =
  "Selected diminished degree inclusivity";

// Update frequency
export const DEFAULT_UPDATE_FREQUENCY = 5000;
export const MIN_UPDATE_FREQUENCY = 1000;
export const UPDATE_FREQUENCY_INCREMENT = 1000;
export const CONVERT_TO_SEC_COEFFICIENT = 1000;
export const UPDATE_FREQUENCY_LEGEND = "Update frequency";
export const INCREASE_FREQ_LABEL = "↓";
export const DECREASE_FREQ_LABEL = "↑";
export const FREQUENCY_LABELS = [INCREASE_FREQ_LABEL, DECREASE_FREQ_LABEL];
export const FREQUENCY_ARIA_LABEL = "Update frequency in seconds";

export const SCREEN_READER_LEGENDS = [
  TRAINING_MODE_LEGEND,
  CHORD_QUALITY_LEGEND,
  DIMINISHED_DEGRE_LEGEND,
  UPDATE_FREQUENCY_LEGEND,
] as const;

export const ARIA_LABELS = [
  CHORD_QUALITY_ARIA_LABEL,
  DIMINISHED_DEGRE_ARIA_LABEL,
  TRAINING_MODE_ARIA_LABEL,
  FREQUENCY_ARIA_LABEL,
] as const;

export const BUTTON_LABELS = [
  ...TRAINING_MODES,
  ...CHORD_QUALITIES,
  ...DIMINISHED_LABELS,
  ...FREQUENCY_LABELS,
] as const;

export const LOWER_STRINGS_TRIAD_LABEL = "↓";
export const UPPER_STRINGS_TRIAD_LABEL = "↑";

export const SCALE_DEGREES = [1, 2, 3, 4, 5, 6, 7];
export const TRIAD_OPTIONS = ["↓", "↑"];

// Keyboard Navigation
export const TOGGLE_CHORD_QUALITY_KEY = "c";
export const TOGGLE_DIMINISHED_KEY = "d";
export const TOGGLE_TRAINING_MODE = "t";
export const DECREASE_FREQUENCY_KEY = "ArrowUp";
export const INCREASE_FREQUENCY_KEY = "ArrowDown";
