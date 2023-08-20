import React from "react";
import "./soundbankswitch.scss";

function SoundBankSwitch({
  soundBankName,
  setSoundBankName,
  setDisplay,
  setRecording,
}) {
  const switchBank = (name) => {
    setSoundBankName(name);
    setDisplay(name);
    setRecording("");
  };

  const bankSlider =
    soundBankName === "Heater Kit"
      ? {
          float: "left",
        }
      : {
          float: "right",
        };

  return (
    <div
      className="select"
      onClick={() => {
        soundBankName === "Smooth Piano Kit"
          ? switchBank("Heater Kit")
          : switchBank("Smooth Piano Kit");
      }}
    >
      <div className="inner" style={bankSlider} />
    </div>
  );
}

export default SoundBankSwitch;
