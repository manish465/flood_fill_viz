import { useEffect, useState } from "react";
import Cell from "./Cell";

const Board = ({ rows, coloumns, fillOnce, setFillOnce, fillMode }) => {
    const [grid, setGrid] = useState([]);

    const createGrid = (rows, coloumns) => {
        let initialGrid = [];

        for (let i = 0; i < rows; i++) {
            let rowArr = [];
            for (let j = 0; j < coloumns; j++) {
                rowArr.push({
                    isWall: false,
                    isFill: false,
                    position: { row: i, col: j },
                });
            }
            initialGrid.push(rowArr);
        }

        return initialGrid;
    };

    const handleClick = (row, col) => {
        const newGrid = grid.map((rowArr, i) =>
            rowArr.map((cell, j) => {
                if (i === row && j === col) {
                    if (fillMode) {
                        if (fillOnce === 1) {
                            setFillOnce((fillTimes) => fillTimes - 1);
                            return { ...cell, isFill: true, isWall: false };
                        }
                    } else {
                        return { ...cell, isFill: false, isWall: true };
                    }
                }
                return cell;
            })
        );
        setGrid(newGrid);
    };

    useEffect(() => {
        setGrid(createGrid(rows, coloumns));
    }, [rows, coloumns]);

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
