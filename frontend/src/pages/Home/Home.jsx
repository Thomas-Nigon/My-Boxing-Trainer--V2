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
        <Link to="/programs">
          <button className="home__NavButtons" type="submit">
            programs
          </button>
        </Link>
        <Link to="/clock">
          <button className="home__NavButtons" type="submit">
            clock
          </button>
        </Link>
      </nav>
      <Link to="/">
        <button type="submit">return</button>
      </Link>
    </div>
  );
}

export default Home;
