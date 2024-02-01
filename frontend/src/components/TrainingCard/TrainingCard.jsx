/* eslint-disable react/prop-types */
import "./trainingCard.scss";

function TrainingCard({ program }) {
  return (
    <main className="programCard">
      <h1 className="programCard__title">Training: {program.name}</h1>
      <img
        className="programCard__pic"
        src={`${import.meta.env.VITE_BACKEND_URL}${program.src}`}
        alt="a figther"
      />
    </main>
  );
}

export default TrainingCard;
