import { useState, useEffect, useRef } from "react";

const Grid = () => {
  const row = 20;
  const column = 20;
  let intervalId = useRef(null);
  const generateGrid = () => {
    const emptyGrid = [];
    for (let i = 0; i < row; i++) {
      emptyGrid.push(Array.from(Array(column), () => false));
    }
    return emptyGrid;
  };
  const [grid, setGrid] = useState(generateGrid);
  const [isRunning] = useState(false);

  const handleClick = (event) => {
    const x = event.target.getAttribute("data-row");
    const y = event.target.getAttribute("data-column");
    setGrid((previousGrid) => {
      const gridCopy = previousGrid.map((row) => [...row]);
      gridCopy[x][y] = !gridCopy[x][y];
      return gridCopy;
    });
  };


  const updateGrid = () => {
    
  }

  useEffect(() => {
    if (isRunning) {
        intervalId.current = setInterval(() => { 
            updateGrid() 
        }, 1000);
    }
    return () => {
        clearInterval(intervalId.current);
        intervalId.current = null;
    }
  }, []);

  return (
    <div
      className="Grid"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${column}, 20px)`,
      }}
    >
      {grid.map((row, rowIndex) =>
        row.map((column, columnIndex) => (
          <button
            onClick={handleClick}
            key={`${rowIndex}-${columnIndex}`}
            data-row={rowIndex}
            data-column={columnIndex}
            style={{
              width: 20,
              height: 20,
              backgroundColor: grid[rowIndex][columnIndex] ? "black" : "white",
              border: "solid 1px black",
            }}
          />
        ))
      )}
    </div>
  );
};

export default Grid;
