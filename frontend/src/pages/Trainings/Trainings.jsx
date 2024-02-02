import "./trainings.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import TrainingCard from "../../components/TrainingCard/TrainingCard";
import Title from "../../components/Title/Title";
import { ProgramsContext } from "../../components/Contexts/ProgramContext";

function Trainings() {
  const { trainings } = useContext(ProgramsContext);
  return (
    <main className="program">
      <Title />
      <section className="program__cardContainer">
        {trainings &&
          trainings.map((training) => (
            <Link
              className="Link"
              key={training.id}
              to={`/training/${training.id}`}
            >
              <TrainingCard program={training} />
            </Link>
          ))}
      </section>
      <Link to="/home">
        <button className="return" type="submit">
          return
        </button>
      </Link>
    </main>
  );
}

export default Trainings;
