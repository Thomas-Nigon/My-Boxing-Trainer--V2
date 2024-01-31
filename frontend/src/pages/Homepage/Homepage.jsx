import "./Homepage.scss";
/* import TextToSpeech from "../../components/TextToSpeech/TextToSpeech";
import CountDown from "../../components/CountDown/CountDown";
import CountdownV2 from "../../components/CountdownV2/CountdownV2"; */
import CountdownV3 from "../../components/CountdownV3/CountdownV3";
/* import TimerWithSounds from "../../components/test"; */

function Homepage() {
  return (
    <main className="container">
      {/*     <TextToSpeech /> */}
      <CountdownV3 />
      {/* <TimerWithSounds /> */}
    </main>
  );
}

export default Homepage;
