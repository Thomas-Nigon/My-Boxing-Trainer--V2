import "./Homepage.scss";
import TextToSpeech from "../../components/TextToSpeech/TextToSpeech";
import CountDown from "../../components/CountDown/CountDown";

function Homepage() {
  return (
    <main className="container">
      <TextToSpeech />
      <CountDown />
    </main>
  );
}

export default Homepage;
