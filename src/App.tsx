import "./App.css";
import ScaleDegreeDisplay from "./components/scale-degree-display";
import { APP_TITLE, APP_TITLE_ID } from "./constants";
import Sidebar from "./components/sidebar";
import SidebarButton from "./components/sidebar-button";

function App() {
  return (
    <main className="main" aria-labelledby={APP_TITLE_ID}>
      <h1 id={APP_TITLE_ID} className="sr-only">
        {APP_TITLE}
      </h1>
      <SidebarButton />
      <Sidebar />
      <ScaleDegreeDisplay />
    </main>
  );
}

export default App;
