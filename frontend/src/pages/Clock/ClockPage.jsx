import "./clock.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import LandscapeMsg from "../../components/LandscapeMsg/LandscapeMsg";

function ClockPage() {
  const [currentTime, setCurrentTime] = useState("");

  const updateTime = () => {
    const time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  };
  setInterval(updateTime, 1000);
  return (
    <>
      <main className="warning-msg">
        <LandscapeMsg />
      </main>
      <main className="clock">
        <h1 className="clock__time">{currentTime} </h1>
        <Link to="/home">
          <button className="clock__button-return" type="submit">
            Return
          </button>
        </Link>
      </main>
    </>
  );
}

export default ClockPage;
