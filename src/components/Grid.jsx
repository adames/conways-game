export const ROWS = 20;
export const COLUMNS = 20;

const Grid = ({handleGridClick, grid}) => {

  const onClick = (e) => {
    handleGridClick(e);
  };

  return (
    <div
      className="Grid"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${COLUMNS}, 20px)`,
      }}
    >
      {grid.map((row, rowIndex) =>
        row.map((cell, columnIndex) => (
          <button
            onClick={onClick}
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
