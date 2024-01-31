import "./welcome.scss";
import { Link } from "react-router-dom";
import Title from "../../components/Title/Title";

function Welcome() {
  return (
    <div className="welcome">
      <Title />
      <main className="welcome__main">
        <img src="src/assets/images/bgImg.png" alt="" />
        <nav className="welcome__NavButtons-container">
          <Link to="/login">
            <button className="welcome__NavButtons" type="submit">
              Login
            </button>
          </Link>
          <Link to="register">
            <button className="welcome__NavButtons" type="submit">
              Register
            </button>
          </Link>
          <Link to="/home">
            <button className="welcome__NavButtons" type="submit">
              Enter as a visitor
            </button>
          </Link>
        </nav>
      </main>
    </div>
  );
}
export default Welcome;
