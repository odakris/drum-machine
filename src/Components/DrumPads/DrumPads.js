import Pad from "../Pad/Pad";

function DrumPads({ volume, setRecording, setDisplay, bank }) {
  return (
    <div className="drum-pads">
      {bank.map((item) => (
        <Pad
          {...item}
          key={item.id}
          volume={volume}
          setRecording={setRecording}
          setDisplay={setDisplay}
        ></Pad>
      ))}
    </div>
  );
}

export default DrumPads;
