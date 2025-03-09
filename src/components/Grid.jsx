import { useState } from "react";

const Grid = () => {
  const gridRows = 20;
  const gridColumns = 20;

  const generateGrid = () => {
    const emptyGrid = [];
    for (let i = 0; i < gridRows; i++) {
      emptyGrid.push(Array.from(Array(gridColumns), () => false));
    }
    return emptyGrid;
  };

  const [grid, setGrid] = useState(generateGrid);

  const handleClick = (event) => {
    const x = event.target.getAttribute("data-row");
    const y = event.target.getAttribute("data-column");
    setGrid((previousGrid) => {
      const gridCopy = previousGrid.map((row) => [...row]);
      gridCopy[x][y] = !gridCopy[x][y];
      return gridCopy;
    });
  };

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

  const updateGrid = (grid) => {
    return grid.map((row, i) =>
      row.map((cell, j) => {
        const neighbors = countActiveNeighbors(grid, i, j);
        return neighbors === 3 || (cell && neighbors === 2);
      })
    );
  };

  return (
    <div
      className="Grid"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${gridColumns}, 20px)`,
      }}
    >
      {grid.map((row, rowIndex) =>
        row.map((cell, columnIndex) => (
          <button
            onClick={handleClick}
            key={`${rowIndex}-${columnIndex}`}
            data-row={rowIndex}
            data-column={columnIndex}
            style={{
              width: 20,
              height: 20,
              backgroundColor: cell ? "black" : "white",
              border: "solid 1px black",
            }}
          />
        ))
      )}
    </div>
  );
};

export default Grid;
