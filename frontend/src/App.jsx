import "./App.scss";
import { Outlet } from "react-router-dom";

import { NavBarProvider } from "./components/Contexts/navBarContext";

function App() {
  return (
    <NavBarProvider>
      <div className="App">
        <Outlet />
      </div>
    </NavBarProvider>
  );
}

export default App;
