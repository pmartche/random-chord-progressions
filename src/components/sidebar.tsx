import { useAppSelector } from "../app/hooks";
import ChordQualitySelector from "./chord-quality-selector";
import DiminishedSelector from "./diminished-selector";
import TrainingModeSelector from "./training-mode-selector";
import UpdateFrequencySelector from "./interval-selector";

const Sidebar = () => {
  const { isSidebarOpen } = useAppSelector(({ scaleDegree }) => scaleDegree);

  return (
    <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
      <ChordQualitySelector />
      <UpdateFrequencySelector />
      <DiminishedSelector />
      <TrainingModeSelector />
    </aside>
  );
};

export default Sidebar;
