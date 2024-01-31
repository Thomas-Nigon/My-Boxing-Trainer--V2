import "./CountdownV4.scss";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useSound from "use-sound";
import beepSound from "./boxingBellSingle.mp3";
import tripleClickSound from "./tripleTick.mp3";
import overBell from "./boxingBell.mp3";

function CountdownV4() {
  const start = 1;
  const workTime = 180;
  const restTime = 1;
  const maxRound = 5;
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
    setSeconds(restTime);
  };
  const handleWork = () => {
    setSeconds(workTime);
    setRound(round + 1);
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
    } else if (round === 5) {
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
    <main className="countdown__container">
      <section className="countdown__button__container">
        {isRunning ? (
          <button type="submit" onClick={handlePause}>
            Pause
          </button>
        ) : (
          <section className="countdown__button__container">
            <button type="submit" onClick={handleStart}>
              Start
            </button>
            <button type="submit" onClick={handleReset}>
              restart
            </button>
          </section>
        )}
      </section>

      <h1 className="countdown__countdown">{formatTime(seconds)}</h1>

      {over ? (
        <h1>It's over yey !!!!</h1>
      ) : (
        <article>
          {pause ? (
            <div>rest Time {seconds}</div>
          ) : (
            <h1 className="countdown__roundCount">
              Round : {round} / {maxRound}
            </h1>
          )}
        </article>
      )}
      <Link to="/home">
        <button type="submit">return</button>
      </Link>
    </main>
  );
}

export default CountdownV4;
