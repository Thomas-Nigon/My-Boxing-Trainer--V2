// eslint-disable-next-line import/no-extraneous-dependencies
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useState, useEffect } from "react";
import TextToSpeech from "../TextToSpeech/TextToSpeech";
import "./CountDown.scss";
import "../../variables.scss";

function CountDown() {
  const [isPaused, setIsPaused] = useState(false);
  const [utterance, setUtterance] = useState(null);
  const [triggered, setTriggered] = useState(false);
  const text = "salut théo !";

  useEffect(() => {
    const synth = window.speechSynthesis;
    const u = new SpeechSynthesisUtterance(text);
    setUtterance(u);
    return () => {
      synth.cancel();
    };
  }, [text]);

  const children = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    if (remainingTime === 18 && !triggered) {
      console.warn("18");
      setTriggered(true);
      const synth = window.speechSynthesis;
      if (isPaused) {
        synth.resume();
      }
      synth.speak(utterance);
      setIsPaused(false);
    }

    return (
      <div className="test">
        <h1 className="countDown__round">Round 1/5</h1>
        <h2 className="countDown__time">{`${minutes}:${seconds}`}</h2>
      </div>
    );
  };
  const [isPlaying, setIsPlaying] = useState(0);
  /*   const [count, setCount] = useState(0); */
  const handleStart = () => setIsPlaying(1);
  const handleClick = () => setIsPlaying(!isPlaying);
  return (
    <>
      <TextToSpeech />
      <button className="countDown__button" type="submit" onClick={handleClick}>
        <CountdownCircleTimer
          isPlaying={isPlaying}
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
      <button type="submit" onClick={handleStart}>
        Start
      </button>
    </>
  );
}

export default CountDown;
