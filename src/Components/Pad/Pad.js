import React, { useState, useEffect } from "react";

function Pad({ letter, id, url, volume, setRecording, setDisplay }) {
  const [active, setActive] = useState(false);

  const playSound = (key) => {
    const audio = document.getElementById(key);
    audio.currentTime = 0;
    audio.play();
    audio.volume = volume;
    setDisplay(id);
    setRecording((previousKey) => previousKey + letter + " ");
    setActive(true);
    setTimeout(() => setActive(false), 200);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  });

  const handleKeyPress = (event) => {
    if (event.key.toUpperCase() === letter) playSound(event.key.toUpperCase());
  };

  const activeKey = active
    ? {
        color: "linen",
        backgroundColor: "orangered",
      }
    : {
        color: "black",
        backgroundColor: "linen",
      };

  return (
    <button
      key={id}
      className="drum-pad"
      id={id}
      onClick={() => {
        playSound(letter);
      }}
      style={activeKey}
    >
      <audio src={url} className="clip" id={letter} volume={volume}></audio>
      {letter}
    </button>
  );
}

export default Pad;
