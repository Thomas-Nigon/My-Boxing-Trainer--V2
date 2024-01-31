import React, { useState, useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import useSound from "use-sound";

import beepSound from "./boxingBellSingle.mp3";
import clickSound from "./click.mp3";

function CountdownV3() {
  const totalCycles = 5;
  const work = 60;
  const rest = 5;
  console.warn(work, totalCycles, rest);
  const [round, setRound] = useState(1);
  const [workTime, setWorktime] = useState(3);
  const [pause, setPause] = useState(false);
  const [isPlaying, setIsPlaying] = useState(0);
  const beepThresholds = [1]; // Play beep sound when 3, 2, 1 seconds left
  const clickThresholds = [6, 4, 2]; // Play beep sound when 3, 2, 1 seconds left
  const [playBeep, { stop: stopBeep }] = useSound(beepSound, { volume: 0.5 });
  const [playClick, { stop: stopClick }] = useSound(clickSound, {
    volume: 0.5,
  });
  console.warn(pause);

  const handleTest = () => {
    setWorktime(1);
    setPause(1);
  };

  const handleClick = () => setIsPlaying(!isPlaying);
  const handleComplete = () => {
    setRound(round + 1);

    if (round < totalCycles) {
      // Restart the timer for the next cycle
      return [true, workTime];
    }
    /*   setPause(true);
    setWorktime(rest); */

    // Stop the timer when all cycles are completed
    return [false, 0];
  };

  const renderTime = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    const shouldPlayBeep = beepThresholds.includes(remainingTime);
    const shouldPlayClick = clickThresholds.includes(remainingTime);

    useEffect(() => {
      if (shouldPlayBeep) {
        playBeep();
      } else if (shouldPlayClick) {
        playClick();
      }
      return () => {
        stopBeep();
        stopClick();
      };
    }, [
      shouldPlayBeep,

      shouldPlayClick,
      playBeep,
      playClick,
      stopBeep,
      stopClick,
    ]);

    return (
      <div>
        <div>
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </div>
      </div>
    );
  };

  return (
    <>
      <button className="countDown__button" type="submit" onClick={handleClick}>
        click me{" "}
      </button>
      <button type="button" onClick={handleTest}>
        click
      </button>
      <CountdownCircleTimer
        key={round}
        isPlaying={isPlaying}
        duration={workTime}
        colors={[["#4db3e7"]]}
        onComplete={handleComplete}
      >
        {renderTime}
      </CountdownCircleTimer>
      <h1>
        Round: {round} / {totalCycles}
      </h1>
    </>
  );
}

export default CountdownV3;
