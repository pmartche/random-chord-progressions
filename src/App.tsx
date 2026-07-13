import "./App.css";
import ScaleDegreeDisplay from "./components/scale-degree-display";
import ChordQualitySelector from "./components/chord-quality-selector";
import DiminishedSelector from "./components/diminished-selector";
import TrainingModeSelector from "./components/training-mode-selector";
import UpdateFrequencySelector from "./components/update-frequency-selector";
import { APP_TITLE, APP_TITLE_ID } from "./constants";

function App() {
  return (
    <main className="main" aria-labelledby={APP_TITLE_ID}>
      <h1 id={APP_TITLE_ID} className="sr-only">
        {APP_TITLE}
      </h1>
      <div className="controls-panel-column">
        <ChordQualitySelector />
        <UpdateFrequencySelector />
      </div>
      <ScaleDegreeDisplay />
      <div className="controls-panel-column">
        <DiminishedSelector />
        <TrainingModeSelector />
      </div>
    </main>
  );
}

export default App;
