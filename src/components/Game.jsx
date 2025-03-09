import React, { useState, useEffect, useRef } from "react";
import Grid from "./Grid";
import Controls from "./Controls";

const Game = () => {
  const [isRunning, setIsRunning] = useState(false);
  let intervalId = useRef(null);

  const handleClick = () => {
    setIsRunning((isRunning) => !isRunning);
  };

  useEffect(() => {
    if (isRunning) {
      intervalId.current = setInterval(() => {
        updateGrid();
      }, 1000);
    }
    return () => {
      clearInterval(intervalId.current);
      intervalId.current = null;
    };
  }, [isRunning]);

  return (
    <div className="Game">
      <Grid />
      <Controls onClick={handleClick} isRunning={isRunning} />
    </div>
  );
};

export default Game;
