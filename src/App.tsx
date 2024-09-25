import React, { useState } from "react";
import CardDeck from "./Components/CardDeck";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import "./Components/styles.css";

const App = () => {
  const [selectedView, setSelectedView] = useState<string | null>(null);

  const handleCardClick = (view: string) => {
    setSelectedView(view);
  };

  const handleBack = () => {
    setSelectedView(null);
  };

  return (
    <div className="app-container">
      {!selectedView && <CardDeck onCardClick={handleCardClick} />}

      {selectedView === "About" && <About onBack={handleBack} />}
      {selectedView === "Experience" && <Experience onBack={handleBack} />}
      {selectedView === "Projects" && <Projects onBack={handleBack} />}
    </div>
  );
};

export default App;
