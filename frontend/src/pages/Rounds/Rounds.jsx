import "./rounds.scss";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../components/Contexts/userContext";
import Title from "../../components/Title/Title";
import { ProgramsContext } from "../../components/Contexts/ProgramContext";

function Rounds() {
  const { auth } = useContext(UserContext);
  const { programs, update } = useContext(ProgramsContext);
  const [commonPrograms, setCommonPrograms] = useState("");
  const [filteredCustoms, setCustom] = useState("");

  useEffect(() => {
    setCommonPrograms(programs.filter((program) => program.common === 1));
    setCustom(programs.filter((program) => program.userId === auth.id));
  }, [update]);
  return (
    <main className="rounds">
      <Title />
      <h1 className="rounds__tile">Chose you training</h1>
      <nav className="rounds__navContainer">
        {commonPrograms &&
          commonPrograms.map((program) => (
            <Link
              key={program.id}
              className="rounds__button-toWorkout"
              to={`/workout/${program.id}`}
            >
              {program.name}
            </Link>
          ))}
        {filteredCustoms &&
          filteredCustoms.map((program) => (
            <section
              className="customContainer"
              key={` id--> ${program.id} -- `}
            >
              <div className="editContainer">
                <Link
                  key={`userID-${auth.id} ${program.id}`}
                  className="editLink"
                  to={`/edit/${program.id}`}
                >
                  <img
                    className="editPic"
                    src={`${
                      import.meta.env.VITE_BACKEND_URL
                    }/assets/images/editLight.png`}
                    alt="an edit pen"
                  />
                </Link>
                <Link
                  key={program.id}
                  className="toProgram"
                  to={`/program/${program.id}`}
                >
                  <button className="rounds__button-toWorkout" type="submit">
                    {program.name}
                  </button>
                </Link>
              </div>
            </section>
          ))}
      </nav>
      <Link className="rounds__button-return" to="/home">
        Return
      </Link>
    </main>
  );
}

export default Rounds;
