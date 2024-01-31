import "./App.scss";
import { Outlet } from "react-router-dom";

import { TechniqueProvider } from "./components/Contexts/TechniqueContext";
import { ProgramsProvider } from "./components/Contexts/ProgramContext";

function App() {
  return (
    <TechniqueProvider>
      <ProgramsProvider>
        <div className="App">
          <Outlet />
        </div>
      </ProgramsProvider>
    </TechniqueProvider>
  );
}

export default App;
