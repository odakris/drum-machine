import React from "react";
import "./controls.scss";
import Display from "../Display/Display";
import Volume from "../Volume/Volume";
import Recording from "../Recording/Recording";
import SoundBankSwitch from "../SoundBankSwitch/SoundBankSwitch";

function Controls({
  soundBankName,
  setSoundBankName,
  volume,
  setVolume,
  recording,
  setRecording,
  display,
  setDisplay,
}) {
  return (
    <div className="controls">
      <Display display={display} />
      <Volume volume={volume} setVolume={setVolume} setDisplay={setDisplay} />
      <Recording
        recording={recording}
        setRecording={setRecording}
        volume={volume}
      />
      <SoundBankSwitch
        soundBankName={soundBankName}
        setSoundBankName={setSoundBankName}
        setDisplay={setDisplay}
        setRecording={setRecording}
      />
    </div>
  );
}

export default Controls;
