import React from 'react';

const Controls = ({ onClick, isRunning }) => {

    const handleButtonClick = () => {
        onClick();
    }

  return (
    <button onClick={handleButtonClick}>
        {isRunning ? "Stop" : "Start"}
    </button>
  );
};

export default Controls;
