import "./App.css";
import ScaleDegreeDisplay from "./components/scale-degree-display";
import { APP_TITLE, APP_TITLE_ID } from "./constants";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <main className="app-shell" aria-labelledby={APP_TITLE_ID}>
      <div className="studio">
        <header className="studio-header">
          <div className="brand-lockup">
            <span className="brand-mark" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <div>
              <p className="brand-eyebrow">
                A little practice, a little discovery
              </p>
              <h1 id={APP_TITLE_ID} className="brand-name">
                {APP_TITLE}
              </h1>
            </div>
          </div>
          <div className="status-indicator">
            <span className="status-dot" aria-hidden="true" />
            <span>Generating</span>
          </div>
        </header>

        <div className="practice-area">
          <ScaleDegreeDisplay />
        </div>

        <Sidebar />

        <footer className="studio-footer">
          <span className="footer-note">Make a moment of it.</span>
          <div className="keyboard-hints" aria-label="Keyboard shortcuts">
            <span>
              <kbd>C</kbd> quality
            </span>
            <span>
              <kbd>D</kbd> diminished
            </span>
            <span>
              <kbd>T</kbd> mode
            </span>
            <span>
              <kbd>↑</kbd>
              <kbd>↓</kbd> interval
            </span>
          </div>
        </footer>
      </div>
    </main>
  );
}

export default App;
