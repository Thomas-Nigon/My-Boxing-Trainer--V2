import "./rounds.scss";
import { Link } from "react-router-dom";
import Title from "../../components/Title/Title";
/*
Creer un tableau ou fetch un tableau de rounds
 pour chaque programme on map le programme
  et on l'envoie vers la page workout
*/

function Rounds() {
  return (
    <main className="rounds">
      <Title />
      <h1>Chose you training</h1>
      <nav className="rounds__navContainer">
        <Link className="rounds__button-toWorkout" to="/workout">
          <button className="rounds__button-toWorkout" type="submit">
            5x5 minutes
          </button>
        </Link>
        <Link className="rounds__button-toWorkout" to="/workout">
          <button className="rounds__button-toWorkout" type="submit">
            5x3 minutes
          </button>
        </Link>
        <Link className="rounds__button-toWorkout" to="/workout">
          <button className="rounds__button-toWorkout" type="submit">
            3x3 minutes
          </button>
        </Link>
        <Link className="rounds__button-toWorkout" to="/workout">
          <button className="rounds__button-toWorkout" type="submit">
            CUSTOM 1
          </button>
        </Link>
        <Link className="rounds__button-toWorkout" to="/workout">
          <button className="rounds__button-toWorkout" type="submit">
            CUSTOM 2
          </button>
        </Link>
      </nav>

      <Link className="rounds__button-toWorkout" to="/home">
        <button className="rounds__button-return" type="submit">
          return
        </button>
      </Link>
    </main>
  );
}

export default Rounds;
