import "./home.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Title from "../../components/Title/Title";
import { UserContext } from "../../components/Contexts/userContext";

function Home() {
  const { auth } = useContext(UserContext);
  return (
    <div className="home">
      <Title />
      <section>
        <h1> hello {auth.pseudo}</h1>
      </section>
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
