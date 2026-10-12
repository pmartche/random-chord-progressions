import ChordQualitySelector from "./chord-quality-selector";
import DiminishedSelector from "./diminished-selector";
import TrainingModeSelector from "./training-mode-selector";
import UpdateFrequencySelector from "./interval-selector";

const Sidebar = () => {
  return (
    <section className="control-deck" aria-labelledby="control-deck-title">
      <div className="control-deck-heading">
        <div>
          <p className="section-eyebrow">Make it yours</p>
          <h2 id="control-deck-title">Session settings</h2>
        </div>
        <span className="settings-count">04 controls</span>
      </div>
      <div className="control-grid">
        <ChordQualitySelector />
        <UpdateFrequencySelector />
        <DiminishedSelector />
        <TrainingModeSelector />
      </div>
    </section>
  );
};

export default Sidebar;
