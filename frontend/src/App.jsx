import "./App.scss";
import { Outlet } from "react-router-dom";

import { TechniqueProvider } from "./Contexts/TechniqueContext";
import { ProgramsProvider } from "./Contexts/ProgramContext";
import { UserProvider } from "./Contexts/userContext";

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
