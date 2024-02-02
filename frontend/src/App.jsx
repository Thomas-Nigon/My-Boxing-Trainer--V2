import "./App.scss";
import { Outlet } from "react-router-dom";

import { TechniqueProvider } from "./components/Contexts/TechniqueContext";
import { ProgramsProvider } from "./components/Contexts/ProgramContext";
import { UserProvider } from "./components/Contexts/userContext";

function App() {
  return (
    <TechniqueProvider>
      <ProgramsProvider>
        <UserProvider>
          <div className="App">
            <Outlet />
          </div>
        </UserProvider>
      </ProgramsProvider>
    </TechniqueProvider>
  );
}

export default App;
