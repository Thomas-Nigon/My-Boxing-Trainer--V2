import "./workout.scss";
import CountdownV4 from "../../components/CountdownV4/CountdownV4";
import Title from "../../components/Title/Title";

function Workout() {
  return (
    <main className="workout">
      <Title />
      <CountdownV4 />
    </main>
  );
}

export default Workout;
