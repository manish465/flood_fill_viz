import { useEffect, useState } from "react";
import Cell from "./Cell";

const Board = ({ rows, coloumns, fillMode }) => {
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
                    return fillMode
                        ? { ...cell, isWall: true, isFill: false }
                        : { ...cell, isWall: false, isFill: true };
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
