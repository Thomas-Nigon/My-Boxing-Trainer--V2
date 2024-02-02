import "./home.scss";
import { Link } from "react-router-dom";
import Title from "../../components/Title/Title";

function Home() {
  return (
    <div className="home">
      <Title />
      <nav className="home__NavButtons-container">
        <Link to="/rounds">
          <button className="home__NavButtons" type="submit">
            Rounds
          </button>
        </Link>
        <Link to="/trainings">
          <button className="home__NavButtons" type="submit">
            Trainings
          </button>
        </Link>
        <Link to="/clock">
          <button className="home__NavButtons" type="submit">
            Clock
          </button>
        </Link>
      </nav>
      <Link to="/">
        <button className="return" type="submit">
          Return
        </button>
      </Link>
    </div>
  );
}

export default Home;
