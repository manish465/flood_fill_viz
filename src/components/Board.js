import { useEffect, useState } from "react";
import Node from "./Node";

const Board = ({ rows, cols }) => {
    const [grid, setGrid] = useState([]);

    useEffect(() => {
        setGrid(getInitialGrid());
    }, [setGrid]);

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
