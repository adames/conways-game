const Controls = ({ handleClick, isRunning }) => {
  return (
    <div>
      <button onClick={() => handleClick}>
        {isRunning ? "Stop" : "Start"}
      </button>
    </div>
  );
};

export default Controls;
