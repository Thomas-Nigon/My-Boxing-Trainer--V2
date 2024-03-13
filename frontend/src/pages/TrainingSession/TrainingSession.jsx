import "./trainingSession.scss";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import TrainingCountdown from "../../components/TrainingCountdown/TrainingCountdown";
import { ProgramsContext } from "../../Contexts/ProgramContext";
import Title from "../../components/Title/Title";

function TrainingSession() {
  const paramId = useParams();
  const id = parseInt(paramId.id, 10);
  console.warn("id:", id);
  const { trainings } = useContext(ProgramsContext);

  const filteredTraining = trainings?.filter((program) => program.id === id);

  return (
    <main className="trainingSession">
      <Title />
      {trainings && (
        <section className="trainingSession__instructionContainer">
          <h1 className="trainingSession__instruction-title">
            Welcome to the {filteredTraining[0].name} oriented training
          </h1>
          <p>Follow the voice instructions or the screen combinaison:</p>
        </section>
      )}
      {/*       <h1>{filteredTraining.name}</h1> */}
      <TrainingCountdown program={filteredTraining[0]} />
    </main>
  );
}

export default TrainingSession;
