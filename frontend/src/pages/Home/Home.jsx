import "./home.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Title from "../../components/Title/Title";
import { UserContext } from "../../Contexts/userContext";

function Home() {
  const { auth } = useContext(UserContext);

  return (
    <div className="home">
      <Title />
      {auth.isLogged ? (
        <section className="home__userInfo">
          <h1> Hello {auth.pseudo} !</h1>
          <Link to="/userPage">my profile</Link>
        </section>
      ) : (
        ""
      )}

      <nav className="home__NavButtons-container">
        <Link to="/rounds">
          <button className="navButtons" type="submit">
            Rounds
          </button>
        </Link>
        <Link to="/trainings">
          <button className="navButtons" type="submit">
            Trainings
          </button>
        </Link>
        <Link to="/clock">
          <button className="navButtons" type="submit">
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
