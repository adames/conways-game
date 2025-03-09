import React from 'react';

const Controls = ({ onClick }) => {

    const handleButtonClick = () => {
        onClick();
    }

  return (
    <button onClick={handleButtonClick}>
    {/* {isRunning ? "Stop" : "Start"} */}
    Start
    </button>
  );
};

export default Controls;
