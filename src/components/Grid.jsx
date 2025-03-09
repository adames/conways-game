import { useState } from "react";

const Grid = () => {
  const row = 20;
  const column = 20;
  const generateGrid = () => {
    const emptyGrid = [];
    for (let i = 0; i < row; i++) {
      emptyGrid.push(Array.from(Array(column), () => false));
    }
    return emptyGrid;
  };
  const [grid, setGrid] = useState(generateGrid);

  const handleClick = (event) => {
    const x = event.target.getAttribute("data-row");
    const y = event.target.getAttribute("data-column");
    console.log(`x = ${x}, y = ${y}`);
    console.log(grid);
    setGrid((previousGrid) => {
      const gridCopy = previousGrid.map((row) => [...row]);
      gridCopy[x][y] = !gridCopy[x][y];
      return gridCopy;
    });
  };

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
              color: grid[rowIndex][columnIndex] ? "black" : "white",
              border: "solid 1px black",
            }}
          />
        ))
      )}
    </div>
  );
};

export default Grid;
