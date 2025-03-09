import { useState } from "react";

const Grid = () => {
  const width = 20;
  const height = 20;
  const generateGrid = () => {
    const emptyGrid = [];
    for (let i = 0; i < width; i++) {
      emptyGrid.push(Array.from(Array(height), () => 0));
    }
    return emptyGrid;
  };
  const [grid, setGrid] = useState(generateGrid);


  return (
    <div
      className="Grid"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${height}, 20px)`,
      }}
    >
      {grid.map((width, widthIndex) =>
        width.map((height, heightIndex) => (
          <button
            key={`${widthIndex}-${heightIndex}`}
            style={{
              width: 20,
              height: 20,
              color: grid[widthIndex][heightIndex] ? "red" : "white",
              border: "solid 1px black",
            }}
          />
        ))
      )}
    </div>
  );
};

export default Grid;
