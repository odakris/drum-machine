import React, { useState } from "react";
import Controls from "./Components/Controls/Controls";
import DrumPads from "./Components/DrumPads/DrumPads";
import Credits from "./Components/Credits/Credits";
import soundBank from "./Data/soundBank";

function App() {
  const [volume, setVolume] = useState(1);
  const [recording, setRecording] = useState("");
  const [display, setDisplay] = useState("OdaMusic Box");
  const [soundBankName, setSoundBankName] = useState("Heater Kit");

  const bank = soundBank(soundBankName);

  return (
    <div id="container">
      <div id="drum-machine">
        <DrumPads
          volume={volume}
          setRecording={setRecording}
          setDisplay={setDisplay}
          bank={bank}
        />
        <Controls
          volume={volume}
          setVolume={setVolume}
          recording={recording}
          setRecording={setRecording}
          display={display}
          setDisplay={setDisplay}
          setSoundBankName={setSoundBankName}
          soundBankName={soundBankName}
        />
      </div>
      <Credits />
    </div>
  );
}

export default App;
