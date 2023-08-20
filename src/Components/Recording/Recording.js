import React from "react";
import "./recording.scss";
import { FaRegPlayCircle, FaRegStopCircle } from "react-icons/fa";

function Recording({ recording, setRecording, volume }) {
  const playRecording = () => {
    let recordArr = recording.split(" ");
    let index = 0;

    const interval = setInterval(() => {
      const audio = document.getElementById(recordArr[index]);
      audio.currentTime = 0;
      audio.play();
      audio.volume = volume;
      index++;
    }, 250);
    setTimeout(() => clearInterval(interval), 250 * recordArr.length - 1);
  };

  return (
    <div id="recording">
      <p className="play" onClick={playRecording}>
        <FaRegPlayCircle style={{ fontSize: 50 }} />
      </p>
      <p className="stop" onClick={() => setRecording("")}>
        <FaRegStopCircle style={{ fontSize: 50 }} />
      </p>
    </div>
  );
}

export default Recording;
