import Counter from "./components/Counter";
import Navbar from "./components/Navbar/Navbar";
/* import logo from "./assets/logo.svg"; */

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        {/*  <img src={logo} className="App-logo" alt="logo" /> */}
        <p>Hello Vite + React !</p>

        <Counter />

        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
