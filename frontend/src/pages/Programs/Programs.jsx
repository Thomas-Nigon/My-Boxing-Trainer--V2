import "./programs.scss";
import { Link } from "react-router-dom";
import ProgramCard from "../../components/ProgramCard/ProgramCard";
import Title from "../../components/Title/Title";

function Programs() {
  const programs = [
    { id: 1, name: "Defence", src: "/assets/images/block.png" },
    { id: 2, name: "Boxing", src: "/assets/images/homepic.png" },
    { id: 3, name: "Kicks", src: "/assets/images/kick.png" },
    { id: 4, name: "random", src: "/assets/images/random.png" },
  ];
  return (
    <main className="program">
      <Title />
      <section className="program__cardContainer">
        {programs &&
          programs.map((program) => (
            <Link className="Link" key={program.id} to="/home">
              <ProgramCard program={program} />
            </Link>
          ))}
      </section>
      <Link to="/home">
        <button type="submit">return</button>
      </Link>
    </main>
  );
}

export default Programs;
