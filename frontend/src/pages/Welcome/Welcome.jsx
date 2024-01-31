import "./welcome.scss";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="welcome">
      <header className="welcome__header">
        <h1 className="welcome__header-title">BOXING</h1>
        <img src="src/assets/images/gloves.png" alt="boxing gloves" />
        <h1 className="welcome__header-title">TRAINER</h1>
      </header>
      <main className="Welcome_main">
        <img src="src/assets/images/bgImg.png" alt="" />
        <nav className="welcome__NavButtons-container">
          <Link to="/login">
            <button className="welcome__NavButtons" type="submit">
              Login Button
            </button>
          </Link>
          <Link to="register">
            <button className="welcome__NavButtons" type="submit">
              Register button
            </button>
          </Link>
          <Link to="/homepage">
            <button className="welcome__NavButtons" type="submit">
              Visitor button
            </button>
          </Link>
        </nav>
      </main>
    </div>
  );
}

export default Welcome;
