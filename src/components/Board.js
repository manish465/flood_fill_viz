import Cell from "./Cell";

const Board = ({ grid, insertWall, floodFill, cellStatus }) => {
    return (
        <div className="grid">
            {grid.map((rowArr, row) => (
                <div key={row} className="row">
                    {rowArr.map((node, col) => (
                        <Cell
                            key={col}
                            grid={grid}
                            insertWall={insertWall}
                            node={node}
                            floodFill={floodFill}
                            cellStatus={cellStatus}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Board;
