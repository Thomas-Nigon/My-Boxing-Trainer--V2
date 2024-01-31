/* eslint-disable no-plusplus */
import "./CountdownV2.scss";
import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
const START_MINUTES = "5";
const START_SECOND = "05";
const START_DURATION = 10;

export default function App() {
  const [currentMinutes, setMinutes] = useState(START_MINUTES);
  const [currentSeconds, setSeconds] = useState(START_SECOND);
  const [isStop, setIsStop] = useState(false);
  const [duration, setDuration] = useState(START_DURATION);
  const [isRunning, setIsRunning] = useState(false);

  const startHandler = () => {
    setDuration(parseInt(START_SECOND, 10) + 60 * parseInt(START_MINUTES, 10));
    /*     setMinutes(60 * 5);
    setSeconds(0); */
    setIsRunning(true);
  };
  const stopHandler = () => {
    // stop timer
    setIsStop(true);
    setIsRunning(false);
  };
  const resetHandler = () => {
    setMinutes(START_MINUTES);
    setSeconds(START_SECOND);
    setIsRunning(false);
    setIsStop(false);
    setDuration(START_DURATION);
  };

  const resumeHandler = () => {
    const newDuration =
      parseInt(currentMinutes, 10) * 60 + parseInt(currentSeconds, 10);
    setDuration(newDuration);

    setIsRunning(true);
    setIsStop(false);
  };

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (isRunning === true) {
      let timer = duration;
      let minutes;
      let seconds;
      const interval = setInterval(function () {
        if (--timer <= 0) {
          resetHandler();
        } else {
          minutes = parseInt(timer / 60, 10);
          seconds = parseInt(timer % 60, 10);

          // eslint-disable-next-line prefer-template
          minutes = minutes < 10 ? "0" + minutes : minutes;
          // eslint-disable-next-line prefer-template
          seconds = seconds < 10 ? "0" + seconds : seconds;

          setMinutes(minutes);
          setSeconds(seconds);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isRunning]);

  return (
    <div className="App">
      <h3>Result:</h3>
      <div className="time">
        {currentMinutes}
        <span className="mx-3">:</span>
        {currentSeconds}
      </div>
      {!isRunning && !isStop && (
        <button
          type="submit"
          onClick={startHandler}
          className="btn btn-primary btn-lg inline me-3"
        >
          START
        </button>
      )}
      {isRunning && (
        <button
          type="submit"
          onClick={stopHandler}
          className="btn btn-danger btn-lg inline me-3"
        >
          STOP
        </button>
      )}

      {isStop && (
        <button
          type="submit"
          onClick={resumeHandler}
          className="btn btn-success btn-lg inline me-3"
        >
          RESUME
        </button>
      )}

      <button
        type="submit"
        onClick={resetHandler}
        className="btn btn-outline-secondary btn-lg inline"
        disabled={!isRunning && !isStop}
      >
        RESET
      </button>
    </div>
  );
}
