import "./App.css";
import ScaleDegreeDisplay from "./components/scale-degree-display";
import ChordQualitySelector from "./components/chord-quality-selector";
import DiminishedSelector from "./components/diminished-selector";
import TrainingModeSelector from "./components/training-mode-selector";
import UpdateFrequencySelector from "./components/update-frequency-selector";

function App() {
  return (
    <main className="main">
      <div className="controls-panel-div">
        <ChordQualitySelector />
        <UpdateFrequencySelector />
      </div>
      <ScaleDegreeDisplay />
      <div className="controls-panel-div">
        <DiminishedSelector />
        <TrainingModeSelector />
      </div>
    </main>
  );
}

export default App;
