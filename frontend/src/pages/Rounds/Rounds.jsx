import "./rounds.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Title from "../../components/Title/Title";
import { ProgramsContext } from "../../components/Contexts/ProgramContext";
/*
Creer un tableau ou fetch un tableau de rounds
 pour chaque programme on map le programme
  et on l'envoie vers la page workout
*/

function Rounds() {
  const { programs } = useContext(ProgramsContext);
  return (
    <main className="rounds">
      <Title />
      <h1>Chose you training</h1>
      <nav className="rounds__navContainer">
        {programs &&
          programs.map((program) => (
            <Link
              key={program.id}
              className="rounds__button-toWorkout"
              to={`/workout/${program.id}`}
            >
              <button className="rounds__button-toWorkout" type="submit">
                {program.name}
              </button>
            </Link>
          ))}
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
