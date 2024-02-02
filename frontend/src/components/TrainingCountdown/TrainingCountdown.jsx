/* eslint-disable jsx-a11y/control-has-associated-label */
import "./trainingCountdown.scss";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import useSound from "use-sound";
import beepSound from "./boxingBellSingle.mp3";
import tripleClickSound from "./tripleTick.mp3";
import overBell from "./boxingBell.mp3";
import { ProgramsContext } from "../Contexts/ProgramContext";

function TrainingCountdown({ program }) {
  const { name /* , restTime */ } = program;
  const { combo } = useContext(ProgramsContext);

  const start = 1;
  /*   const workTime = program.roundLength;
  const maxRound = program.totalRound; */
  const workTime = 20;
  const maxRound = 3;
  const [show, setShow] = useState(false);
  const [comboId, setComboId] = useState(0);
  const [seconds, setSeconds] = useState(workTime);
  const [isRunning, setIsRunning] = useState(false);
  const [pause, setPause] = useState(false);
  const [round, setRound] = useState(start);
  const [over, setIsOver] = useState(false);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const remainingSeconds = time % 60;

    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(remainingSeconds).padStart(2, "0");

    return `${formattedMinutes} : ${formattedSeconds}`;
  };

  const beepThresholds = [1];
  const clickThresholds = [4];

  const [playBeep, { stop: stopBeep }] = useSound(beepSound, { volume: 0.5 });
  const [playClick, { stop: stopClick }] = useSound(tripleClickSound, {
    volume: 1,
  });
  const [playOver, { stop: stopOverBell }] = useSound(overBell, {
    volume: 0.5,
  });

  const handleRest = () => {
    setPause(true);
    // setSeconds(restTime);
    setSeconds(5);
  };
  const handleWork = () => {
    setSeconds(workTime);
    setRound(round + 1);
    setComboId(comboId + 1);
    setPause(false);
  };
  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };
  const handleReset = () => {
    setSeconds(180);
  };

  const shouldPlayBeep = beepThresholds.includes(seconds);
  const shouldPlayClick = clickThresholds.includes(seconds);
  useEffect(() => {
    let interval;

    if (isRunning && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);
    } else if (round === maxRound) {
      setIsOver(true);
      playOver();
      return () => clearInterval(interval);
    } else if (!pause && seconds === 0) {
      handleRest();
    } else if (pause && seconds === 0) {
      handleWork();
    }

    return () => clearInterval(interval);
  }, [isRunning, seconds]);

  useEffect(() => {
    if (shouldPlayBeep) {
      playBeep();
    } else if (shouldPlayClick) {
      playClick();
    }
  }, [
    shouldPlayBeep,
    shouldPlayClick,
    playBeep,
    playClick,
    stopBeep,
    stopClick,
    stopOverBell,
  ]);

  return (
    <>
      <button
        className="countdownButton"
        type="submit"
        onClick={() => setShow(!show)}
      >
        Instructions
      </button>
      <header>
        {combo[comboId].map((comboss) => (
          <div key={comboss.id} className="instructionContainer">
            <p className="trainingCountdown__instruction" key={comboss.id}>
              {comboss.name}
            </p>
          </div>
        ))}
      </header>

      {show && (
        <button
          className="gifButton"
          type="submit"
          onClick={() => setShow(!show)}
        >
          <div className="popup">
            <p className="instructionTitle">{combo[comboId][0].name}</p>
            <img
              className="gifImg"
              src={`${import.meta.env.VITE_BACKEND_URL}${
                combo[comboId][0].src
              }`}
              alt="A BOXING GIF"
            />
            <p className="instructionTitle">{combo[comboId][1].name}</p>
            <img
              className="gifImg"
              src={`${import.meta.env.VITE_BACKEND_URL}${
                combo[comboId][1].src
              }`}
              alt="A BOXING GIF"
            />
            <p className="instructionTitle">{combo[comboId][2].name}</p>
            <img
              className="gifImg"
              src={`${import.meta.env.VITE_BACKEND_URL}${
                combo[comboId][2].src
              }`}
              alt="A BOXING GIF"
            />
          </div>
        </button>
      )}
      <main className="countdown__container">
        <h1>Program: {name}</h1>
        <section className="countdown__button__container">
          {isRunning ? (
            <button
              className="countdownButton"
              type="submit"
              onClick={handlePause}
            >
              Pause
            </button>
          ) : (
            <section className="countdown__button__container">
              <button
                className="countdownButton"
                type="submit"
                onClick={handleStart}
              >
                Start
              </button>
              <button
                className="countdownButton"
                type="submit"
                onClick={handleReset}
              >
                Restart
              </button>
            </section>
          )}
        </section>

        <h1 className="countdown__countdown">{formatTime(seconds)}</h1>

        {over ? (
          <h2>It's over yey !!!!</h2>
        ) : (
          <article>
            {pause ? (
              <p>Rest Time {seconds}</p>
            ) : (
              <p className="countdown__roundCount">
                Round : {round} / {maxRound}
              </p>
            )}
          </article>
        )}
        <Link to="/home">
          <button className="return" type="submit">
            Return
          </button>
        </Link>
      </main>
    </>
  );
}
TrainingCountdown.propTypes = {
  program: PropTypes.shape({
    id: PropTypes.number.isRequired,
    length: PropTypes.string,
    name: PropTypes.string.isRequired,
    restTime: PropTypes.number.isRequired,
    roundLength: PropTypes.number.isRequired,
    totalRound: PropTypes.number.isRequired,
    userId: PropTypes.number,
  }).isRequired,
};

export default TrainingCountdown;
