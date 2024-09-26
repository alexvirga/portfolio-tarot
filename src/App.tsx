import { useState } from "react";
import CardDeck from "./Components/CardDeck/CardDeck";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";
import "./Components/styles.css";

const App = () => {
  const [selectedView, setSelectedView] = useState<string | null>(null);
  const [isReturning, setIsReturning] = useState(false); // Keep track of return state

  const handleCardClick = (view: string) => {
    setIsReturning(false); // Not returning, so allow animations
    setSelectedView(view);
  };

  const handleBack = () => {
    setIsReturning(true); // Returning to card view, skip animations
    setSelectedView(null);
  };

  return (
    <div className="app-container">
      {!selectedView && (
        <CardDeck onCardClick={handleCardClick} isReturning={isReturning} />
      )}
      {selectedView === "About" && <About onBack={handleBack} />}
      {selectedView === "Experience" && <Experience onBack={handleBack} />}
      {selectedView === "Projects" && <Projects onBack={handleBack} />}
    </div>
  );
};

export default App;
