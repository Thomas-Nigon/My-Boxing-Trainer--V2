import "./Homepage.scss";
import TextToSpeech from "../../components/TextToSpeech/TextToSpeech";
import CountDown from "../../components/CountDown/CountDown";

function Homepage() {
  return (
    <main className="container">
      <img
        className="gif"
        name="test"
        src={`${import.meta.env.VITE_BACKEND_URL}/assets/gifs/jab.gif`}
        alt="logo"
      />
      <TextToSpeech />
      <CountDown />
    </main>
  );
}

export default Homepage;
