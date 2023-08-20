import React from "react";
import "./volume.scss";

function Volume({ volume, setDisplay, setVolume }) {
  return (
    <div className="volume">
      <input
        id="volume-slider"
        name="volume-slider"
        type="range"
        min="0"
        max="1"
        step="0.01"
        className="slider"
        value={volume}
        onChange={(event) => {
          setVolume(event.target.value);
          setDisplay("Volume : " + Math.round(volume * 100));
          setTimeout(() => setDisplay(String.fromCharCode(160)), 1000);
        }}
      />
    </div>
  );
}

export default Volume;
