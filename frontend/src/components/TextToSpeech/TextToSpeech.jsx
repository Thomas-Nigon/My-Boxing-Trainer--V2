import "./TextToSpeech.scss";
import { useEffect, useState } from "react";

function TextToSpeech() {
  const [isPaused, setIsPaused] = useState(false);
  const [utterance, setUtterance] = useState(null);
  const text = "Bonsoir Antzoine !";

  useEffect(() => {
    const synth = window.speechSynthesis;
    const u = new SpeechSynthesisUtterance(text);
    setUtterance(u);
    return () => {
      synth.cancel();
    };
  }, [text]);

  const handlePlay = () => {
    const synth = window.speechSynthesis;
    if (isPaused) {
      synth.resume();
    }
    synth.speak(utterance);
    setIsPaused(false);
  };

  const handlePause = () => {
    const synth = window.speechSynthesis;
    synth.pause();
    setIsPaused(true);
  };

  const handleStop = () => {
    const synth = window.speechSynthesis;
    synth.cancel();
    setIsPaused(false);
  };

  return (
    <div>
      <button type="submit" onClick={handlePlay}>
        {isPaused ? "Resume" : "Play"}
      </button>
      <button type="submit" onClick={handlePause}>
        Pause
      </button>
      <button type="submit" onClick={handleStop}>
        Stop
      </button>
    </div>
  );
}

export default TextToSpeech;
