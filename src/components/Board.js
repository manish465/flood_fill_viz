import { useEffect, useState } from "react";
import Node from "./Node";

const Board = ({ rows, cols, wallMode }) => {
    const [grid, setGrid] = useState([]);
    const [isFillDisabled, setIsFillDisabled] = useState(false);

    useEffect(() => {
        setGrid(getInitialGrid());
    }, [setGrid, rows, cols]);

    const getInitialGrid = () => {
        const grid = [];

        for (let row = 0; row < rows; row++) {
            const currentRow = [];
            for (let col = 0; col < cols; col++) {
                currentRow.push(createNode(col, row));
            }
            grid.push(currentRow);
        }

        return grid;
    };

    const createNode = (col, row) => {
        return {
            col,
            row,
            isWall: false,
            isFilled: false,
        };
    };

    return (
        <div className="board-wrapper">
            <div id="board">
                {grid.map((row, rowIdx) => {
                    return (
                        <div className="row" key={rowIdx}>
                            {row.map((node, nodeIdx) => {
                                return (
                                    <Node
                                        key={nodeIdx}
                                        row={node.row}
                                        col={node.col}
                                        isWall={node.isWall}
                                        isFilled={node.isFilled}
                                        wallMode={wallMode}
                                        isFillDisabled={isFillDisabled}
                                        setIsFillDisabled={setIsFillDisabled}
                                    />
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Board;
