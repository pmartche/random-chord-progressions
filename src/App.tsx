import "./App.css";
import ChordQualitySelector from "./components/chord-quality-selector";
import DiminishedSelector from "./components/diminished-selector";
import ScaleDegreeDisplay from "./components/scale-degree-display";
import TrainingModeSelector from "./components/training-mode-selector";
import UpdateFrequencyDisplay from "./components/update-frequency-display";

function App() {
  return (
    <div className="main-div">
      <div className="controls-panel-div">
        <ChordQualitySelector />
        <UpdateFrequencyDisplay />
      </div>
      <ScaleDegreeDisplay />
      <div className="controls-panel-div">
        <DiminishedSelector />
        <TrainingModeSelector />
      </div>
    </div>
  );
}

export default App;
