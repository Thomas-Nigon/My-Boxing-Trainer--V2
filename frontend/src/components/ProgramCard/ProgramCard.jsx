/* eslint-disable react/prop-types */
import "./programCard.scss";

function ProgramCard({ program }) {
  return (
    <main className="programCard">
      <h1 className="programCard__title">Program: {program.name}</h1>
      <img
        className="programCard__pic"
        src={`${import.meta.env.VITE_BACKEND_URL}${program.src}`}
        alt="a figther"
      />
    </main>
  );
}

export default ProgramCard;
