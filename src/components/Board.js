import Cell from "./Cell";

const Board = ({ grid, handleClick }) => {
    return (
        <div className="grid">
            {grid.map((rowArr, row) => (
                <div key={row} className="row">
                    {rowArr.map((node, col) => (
                        <Cell key={col} handleClick={handleClick} node={node} />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Board;
