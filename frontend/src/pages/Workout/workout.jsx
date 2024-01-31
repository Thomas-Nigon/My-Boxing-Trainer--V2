import "./workout.scss";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import CountdownV4 from "../../components/CountdownV4/CountdownV4";
import { ProgramsContext } from "../../components/Contexts/ProgramContext";
import Title from "../../components/Title/Title";

function Workout() {
  const paramId = useParams();
  const id = parseInt(paramId.id, 10);
  const { programs } = useContext(ProgramsContext);

  const filteredProgram = programs?.filter((program) => program.id === id);

  return (
    <main className="workout">
      <Title />
      <CountdownV4 program={filteredProgram[0]} />
    </main>
  );
}

export default Workout;
