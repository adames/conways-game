import React, { useState, useEffect, useRef } from "react";
import Grid, { ROWS, COLUMNS } from "./Grid";
import Controls from "./Controls";

const Game = () => {
  let intervalId = useRef(null);
  const generateGrid = () => {
    const emptyGrid = [];
    for (let i = 0; i < ROWS; i++) {
      emptyGrid.push(Array.from(Array(COLUMNS), () => false));
    }
    return emptyGrid;
  };
  const [grid, setGrid] = useState(generateGrid);
  const [isRunning, setIsRunning] = useState(false);

  const handleStartClick = () => {
    setIsRunning((isRunning) => !isRunning);
  };

  const handleGridClick = (e) => {
    const x = e.target.getAttribute("data-row");
    const y = e.target.getAttribute("data-column");
    setGrid((previousGrid) => {
      const gridCopy = previousGrid.map((row) => [...row]);
      gridCopy[x][y] = !gridCopy[x][y];
      return gridCopy;
    });
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

  const countActiveNeighbors = (grid, row, column) => {
    let count = 0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) continue;
        const newRow = row + i;
        const newColumn = column + j;
        if (
          newRow >= 0 &&
          newRow < row &&
          newColumn >= 0 &&
          newColumn < column
        ) {
          count += grid[newRow][newColumn] ? 1 : 0;
        }
      }
    }
    return count;
  };

  const updateGrid = () => {
    setGrid((prevGrid) => {
      const newGrid = prevGrid.map((row, i) =>
        row.map((cell, j) => {
          const neighbors = countActiveNeighbors(grid, i, j);
          if (cell && (neighbors === 2 || neighbors === 3)) {
            return true;
          } else if (!cell && neighbors === 3) {
            return true;
          } else {
            return false;
          }
        })
      );
      return newGrid;
    });
  };

  return (
    <div className="Game">
      <Grid grid={grid} handleGridClick={handleGridClick} />
      <Controls onClick={handleStartClick} isRunning={isRunning} />
    </div>
  );
};

export default Game;
