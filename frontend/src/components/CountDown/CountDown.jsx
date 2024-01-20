// eslint-disable-next-line import/no-extraneous-dependencies
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./CountDown.scss";
import "../../variables.scss";
import { useState } from "react";

function CountDown() {
  const children = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    return (
      <div className="test">
        <h1 className="countDown__round">Round 1/5</h1>
        <h2 className="countDown__time">{`${minutes}:${seconds}`}</h2>
      </div>
    );
  };
  const [pause, setPause] = useState(1);
  const handleClick = () => setPause(!pause);
  return (
    <button className="countDown__button" type="submit" onClick={handleClick}>
      <CountdownCircleTimer
        isPlaying={pause}
        isGrowing={0} // rempli ou vide la jauge d'avancée
        duration={20}
        size={350} // taille du timer
        strokeWidth={10} // tailler du outer circle aniamation
        strokeLinecap="round " // forme de la jauge
        rotation="counterclockwise"
        colors={["#800e13", "#000000"]}
        /*   trailColor="#d9d9d9" */
        isSmoothColorTransition={1}
      >
        {children}
      </CountdownCircleTimer>
    </button>
  );
}

export default CountDown;
